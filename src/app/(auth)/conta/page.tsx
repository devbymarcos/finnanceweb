import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Image from "next/image";

const Login = () => {
  async function createUser(formData: FormData) {
    "use server";
    const rawFormData = {
      first_name: formData.get("first_nam"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //TODO [CREATE NEW USER] -  Validar dados e implementar envio
    console.log(rawFormData);
  }

  return (
    <>
      <section className="grid md:grid-cols-2   ">
        <div className="self-center px-4">
          <div className="mb-3 w-full px-2 mx-auto">
            <h1 className="mb-2 text-lg font-bold  dark:text-base-white text-base-black">
              Realize o cadastro para acessar
            </h1>
          </div>

          <div className="w-full  mx-auto bg-base-white dark:bg-base-black  p-8 rounded-lg">
            <form action={createUser}>
              <div className="mb-6">
                <Label>Nome</Label>
                <Input
                  type="text"
                  placeholder="Primeiro nome"
                  name="first_name"
                />
              </div>
              <div className="mb-6">
                <Label>Sobre Nome</Label>
                <Input type="text" placeholder="Último nome" name="last_name" />
              </div>
              <div className="mb-6">
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="Seu email será seu login"
                  name="email"
                />
              </div>
              <div className="mb-12">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="mínimo 8 caracteres"
                  name="password"
                />
              </div>
              <div className="mb-12">
                <button className="bg-base-secondary px-2 py-3 font-bold  w-full rounded-sm">
                  Registrar
                </button>
              </div>
              <Link
                className="my-4 text-sm dark:text-base-white text-base-black"
                href="/login"
              >
                Ja tem uma conta ? Acesse aqui
              </Link>
            </form>
          </div>
        </div>
        <div className="w-full hidden md:flex items-center justify-center   bg-base-secondary">
          <Image
            src="/images/logo/logo-svg.svg"
            width={100}
            height={100}
            alt="Logo do aplicativo"
            className=" shadow-lg rounded-3xl  "
          />
        </div>
      </section>
    </>
  );
};

export default Login;
