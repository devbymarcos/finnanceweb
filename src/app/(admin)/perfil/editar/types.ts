export interface InitialState {
  data: {
    errors: {
      name: string;
      email: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}
export interface typeUserProps {
  user: {
    data: Array<{
      name: number;
      emial: number;
    }>;
  };
}
