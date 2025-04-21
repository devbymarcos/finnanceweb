import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: {
        id: 14,
        user_id: 3,
        name: "Minha carteira",
        description: "padrão",
        option_wallet: 0,
        created_at: "2024-05-26T11:07:09.000Z",
        updated_at: null,
      },

      message: "Requisição realizada com sucesso",
      success: true,
    },

    { status: 200 }
  );
}
