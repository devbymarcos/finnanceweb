export type ApiReturn = {
  data: {
    chart: {
      due_year: string;
      due_month: string;
      due_date: string;
      income: number;
      expense: number;
    };
    paidMonth: number;
    receivedMonth: number;
    balanceSum: number;
    invoiceOpen: any;
  };
  message: string;
  request: string;
};

export type PropsIndex = {
  params: {
    wallet_id: string;
  };
};
