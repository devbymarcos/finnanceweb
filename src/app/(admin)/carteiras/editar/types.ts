export interface PropsWalletType {
  wallet: {
    data: {
      id: number;
      user_id: number;
      name: string;
      description: string;
      option_wallet: number;
      created_at: string;
      updated_at: string;
    };
  };
}

export interface InitialState {
  data: {
    errors: {
      name: string;
      description: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}
