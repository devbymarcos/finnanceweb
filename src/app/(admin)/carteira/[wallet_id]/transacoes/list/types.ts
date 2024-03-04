export type typePropsListTransaction = {
  searchParams?: {
    dateone?: string;
    datetwo?: string;
  };
  params: {
    wallet_id: string;
  };
};

export type paramsGetInvoiceList =
  | {
      dateone?: string;
      datetwo?: string;
      walletId?: string;
    }
  | undefined;
