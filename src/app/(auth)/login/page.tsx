import FormLogin from "./FormLogin";
import { cookies } from "next/headers";
import { oswald } from "@/fonts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const Login = () => {
  const remember = cookies().get("remember")?.value;

  return (
    <>
      <section className="flex flex-col p-6 justify-center items-center">
        <h1 className={`mb-5 text-4xl font-bold ${oswald.className}`}>
          Finnance
        </h1>
        <h2 className="mb-5">Faça Login e comece a controlar</h2>
        <Card className="pt-10 w-full max-w-[400px]">
          <CardContent>
            <FormLogin remember={remember} />
          </CardContent>
          <CardFooter>
            <Link
              className="my-4 text-sm dark:text-base-white text-base-black"
              href="conta"
            >
              Ainda não tem conta ? Crie aqui
            </Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Login;
