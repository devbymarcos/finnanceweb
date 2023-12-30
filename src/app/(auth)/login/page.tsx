import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";

const Login = () => {
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
            <form>
              <div className="mb-6">
                <Label>Email</Label>
                <Input type="text" />
              </div>
              <div className="mb-12">
                <Label>Password</Label>
                <Input type="password" />
              </div>
              <div className="mb-12">
                <Link href="/">
                  <button className="bg-base-yellow px-2 py-3 font-bold  w-full rounded-sm">
                    Login
                  </button>
                </Link>
              </div>
              <Link
                className="my-4 text-sm dark:text-base-white text-base-black"
                href="conta"
              >
                Ainda não tem conta ? Crie aqui
              </Link>
            </form>
          </div>
        </div>
        <div className="w-full hidden md:block  bg-base-yellow"></div>
      </section>
    </>
  );
};

export default Login;
