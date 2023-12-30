import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";

const Login = () => {
  return (
    <>
      <section className="grid grid-cols-2">
        <div>
          <div className="mb-3 p-8 w-full max-w-[300px] mx-auto">
            <h1 className="mb-2 font-bold">Crie uma conta</h1>
            <Link className="" href="/login">
              Ja tenho uma Conta
            </Link>
          </div>
          <p className="text-center my-6">Ou</p>
          <div className="w-full max-w-[300px] mx-auto bg-slate-200  p-8 rounded-lg">
            <form>
              <div className="mb-6">
                <Label>Email</Label>
                <Input type="text" />
              </div>
              <div className="mb-12">
                <Label>Password</Label>
                <Input type="password" />
              </div>
              <div>
                <Link href="/">
                  <button className="bg-base-yellow px-2 py-3 font-bold block w-full rounded-sm">
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
