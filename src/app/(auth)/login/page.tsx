import FormLogin from "./FormLogin";
import { cookies } from "next/headers";
import { oswald } from "@/fonts";

const Login = () => {
  const remember = cookies().get("remember")?.value;

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className={`mb-5 text-4xl font-bold ${oswald.className}`}>
          Finnance
        </h1>
        <h2 className="mb-5">Faça Login e comece a controlar</h2>
        <div className="w-full max-w-[400px] mx-auto bg-base-white dark:bg-base-black  p-8 rounded-lg">
          <FormLogin remember={remember} />
        </div>
      </section>
    </>
  );
};

export default Login;
