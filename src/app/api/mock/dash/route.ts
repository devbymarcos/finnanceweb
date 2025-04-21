import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: {
        chart: [
          {
            months: "Jul",
            income: 100,
            expense: null,
          },
        ],
        paidMonth: null,
        receivedMonth: null,
        balanceSum: -627.4799661636353,
        invoiceOpen: [
          {
            id: 480,
            user_id: 3,
            wallet_id: 14,
            ds_wallet: null,
            category_id: 35,
            ds_category: "Vestuário ",
            invoice_of: null,
            name: "invoice",
            description: "teste de receita ",
            price: 1000,
            due_at: "2025-04-07T00:00:00.000Z",
            type: "income",
            pay: "unpaid",
            repeat_when: "single",
            period: "month",
            group_quota: null,
            created_at: "2025-04-06T23:00:32.000Z",
            updated_at: null,
          },
          {
            id: 481,
            user_id: 3,
            wallet_id: 14,
            ds_wallet: null,
            category_id: 26,
            ds_category: "Bancos",
            invoice_of: null,
            name: "invoice",
            description: "teste de pagamento ",
            price: 1000,
            due_at: "2025-04-10T00:00:00.000Z",
            type: "expense",
            pay: "unpaid",
            repeat_when: "single",
            period: "month",
            group_quota: null,
            created_at: "2025-04-06T23:01:02.000Z",
            updated_at: null,
          },
        ],
      },
      message: "",
      success: "dash",
    },
    { status: 200 }
  );
}
