export type ApiReturn = {
  data: {
    result: {
      months: string[];
      values: number[];
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
