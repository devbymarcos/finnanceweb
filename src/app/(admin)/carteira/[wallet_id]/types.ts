export type ApiReturn = {
  data: {
    result: {
      months: string[];
      values: number[];
    };
    paidMonth: number;
    receivedMonth: number;
    balanceSum: Array<{
      walletId: number;
      saldo: number;
      name: string;
    }>;
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
