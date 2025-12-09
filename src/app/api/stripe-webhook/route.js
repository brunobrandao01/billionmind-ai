import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Erro no webhook:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // 🔥 Supabase Client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  // 🎯 Quando o pagamento for concluído
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const email = session.customer_details.email;
    const priceId = session.metadata?.price_id;

    let newPlan = "free";

    // Identificar plano
    if (priceId === "price_1SYaniARia0ROQXBL4xAFQBo") {
      newPlan = "pro";
    }

    if (priceId === "price_1SYaspARia0ROQXBunnpCkml") {
      newPlan = "premium";
    }

    // Atualizar plano no Supabase
    await supabase
      .from("profiles")
      .update({ plan: newPlan })
      .eq("email", email);

    console.log(`✔ Plano atualizado para: ${newPlan}`);
  }

  return NextResponse.json({ received: true });
}
