export interface Formtransaction {
  wallet: {
    wallet_id: string;
  };
  category: Array<{
    id: number;
    user_id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }>;
  invoice: any;
}

export interface InitialState {
  data: {
    errors: {
      description: string;
      price: string;
      due_at: string;
      type: string;
      wallet_id: string;
      category_id: string;
      pay: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}

export type typeEditTransactionProps = {
  searchParams?: {
    invoiceId?: string;
  };
  params: {
    wallet_id: string;
  };
};
