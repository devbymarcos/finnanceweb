import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Simula um corpo de requisição (email/senha)
  const { email, password } = await request.json();

  // Validação mockada (usuário fixo)
  if (email === "mock@mock.com" && password === "mock1234") {
    return NextResponse.json(
      {
        data: [
          {
            token: "token_fake_gerado_pelo_mock",
            id: 1,
            name: "Usuário Mock",
            email: "usuario@exemplo.com",
          },
        ],
      },

      { status: 200 }
    );
  }

  // Erro mockado
  return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
