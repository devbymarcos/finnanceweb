export interface Formtransaction {
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
  category: {
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      created_at: string;
      updated_at: string;
    }>;
  };
  invoice: any;
}

export interface InputMask {
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  onChange?: (e: any) => void;
  defaultValue?: string;
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
      repeat_when: string;
      installments: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}
