import { cookies } from "next/headers";

type Props = {
  children: React.ReactNode;
};

const PrivateRouter = ({ children }: Props) => {
  const token: boolean = cookies().has("token");
  return (
    <>
      {!token && null}
      {token && children}
    </>
  );
};

export default PrivateRouter;
