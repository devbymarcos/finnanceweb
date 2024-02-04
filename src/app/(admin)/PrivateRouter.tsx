import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const PrivateRouter = ({ children }: Props) => {
  const token: boolean = cookies().has("token");
  if (!token) {
    redirect("/login");
  }
  return (
    <>
      {!token && null}
      {token && children}
    </>
  );
};

export default PrivateRouter;
