import { NextResponse } from "next/server";

export async function POST(request: Request) {
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
