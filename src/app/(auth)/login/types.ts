export interface StateTypes {
  data: {
    errors: {
      email: string;
      password: string;
    };
    message: string | boolean;
  };
}
export type PropsFormLogin = {
  remember?: string;
};
