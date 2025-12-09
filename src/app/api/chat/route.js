import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Envie uma mensagem válida." },
        { status: 400 }
      );
    }

    // Enviar requisição para a API da OpenAI
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: message,
      }),
    });

    const data = await response.json();

    const text =
      data.output_text ||
      data.choices?.[0]?.message?.content ||
      "Não entendi sua mensagem.";

    return NextResponse.json({ reply: text });
  } catch (err) {
    return NextResponse.json(
      { reply: "Erro ao gerar resposta da AI." },
      { status: 500 }
    );
  }
}
