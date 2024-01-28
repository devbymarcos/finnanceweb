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
