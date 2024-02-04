export interface PropsCategoryType {
  category: {
    data: Array<{
      id: number;
      user_id: number;
      name: string;
      description: string;
      type: string;
      created_at: string;
      updated_at: string;
    }>;
  };
}

export interface InitialState {
  data: {
    errors: {
      name: string;
      description: string;
      type: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}
