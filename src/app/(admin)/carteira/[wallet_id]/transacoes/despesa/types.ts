export type typesTransaction = {
  data: {
    errors: {
      description: string;
      price: string;
      due_at: string;
      type: string;
      wallet_id: string;
      category_id: string;
      pay: string;
      repeat_when: string;
      installments: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
};

export type typeCreateTransactionProps = {
  params: {
    wallet_id: string;
  };
};

export type typeFormTransactionProps = {
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
};
