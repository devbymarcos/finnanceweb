import Image from "next/image";
import FormLogin from "./FormLogin";
import { cookies } from "next/headers";

const Login = () => {
  const remember = cookies().get("remember")?.value;

  return (
    <>
      <section className="grid md:grid-cols-2   ">
        <div className="self-center">
          <div className="mb-3 w-full max-w-[300px] mx-auto">
            <h1 className="mb-2 text-lg font-bold  dark:text-base-white text-base-black">
              Insira os dados e acesse
            </h1>
          </div>
          <div className="w-full max-w-[300px] mx-auto bg-base-white dark:bg-base-black  p-8 rounded-lg">
            <FormLogin remember={remember} />
          </div>
        </div>
        <div className="w-full hidden md:flex items-center justify-center   bg-base-secondary">
          <Image
            src="/images/logo/wc-logo-white.png"
            width={300}
            height={300}
            alt="Logo do aplicativo"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
