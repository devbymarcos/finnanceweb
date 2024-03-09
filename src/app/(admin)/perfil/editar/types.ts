export interface InitialState {
  data: {
    errors: {
      first_name: string;
      last_name: string;
      email: string;
      photo: string;
    };
    message: string;
    status: boolean;
    type: string;
  };
}
export interface typeUserProps {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    photo: string;
  };
}
