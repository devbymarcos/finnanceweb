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
