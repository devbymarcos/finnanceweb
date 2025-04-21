import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: [
        {
          name: "Minha carteira",
          id: 14,
          balance: -627.4799661636353,
        },
        {
          name: "Investimento",
          id: 15,
          balance: 2927.1199822425842,
        },
        {
          name: "Saldo devedor ",
          id: 16,
          balance: -3531.2700805664062,
        },
        {
          name: "Espaço living  ",
          id: 19,
          balance: 600.3200403749943,
        },
      ],
      message: "Requisição realizada com sucesso",
      success: true,
    },

    { status: 200 }
  );
}
