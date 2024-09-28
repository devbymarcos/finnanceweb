export type typesTransaction = {
  data: {
    errors: {
      description: string;
      price: string;
      due_at: string;
      walletIdIn: string;
      walletIdOut: string;
      categoryIdIn: string;
      categoryIdOut: string;
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
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      description: string;
      option_wallet: number;
      created_at: string;
      updated_at: string;
    }>;
  };
  walletCurrent: string;
  category: {
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      created_at: string;
      updated_at: string;
    }>;
  };
};
