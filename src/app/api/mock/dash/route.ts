import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: {
        chart: 0,
        paidMonth: 1000,
        receivedMonth: 1000,
        invoiceOpen: [
          {
            id: 1,
            description: "Fatura 1",
            price: 1000,
            date: "2023-10-01",
            status: "open",
          },
        ],
        balanceSum: 1000,
      },
    },
    { status: 200 }
  );
}
