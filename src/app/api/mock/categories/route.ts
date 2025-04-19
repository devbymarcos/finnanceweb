import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: [
        {
          name: "teste de carteira",
          id: 1,
          balance: 1000,
          message: "Record not found",
          request: request,
        },
      ],
    },

    { status: 200 }
  );
}
