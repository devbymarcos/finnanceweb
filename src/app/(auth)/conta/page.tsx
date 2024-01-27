import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Image from "next/image";
import Submit from "@/components/form/Submit";

const Login = () => {
  async function createUser(formData: FormData) {
    "use server";
    const rawFormData = {
      first_name: formData.get("first_nam"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(rawFormData);
  }

  return (
    <>
      <section className="container-custom mx-auto my-12 ">
        <div className="mb-3  px-2 mx-auto text-center">
          <h1 className="mb-2 text-4xl  dark:text-base-white text-base-black">
            Cadastre-se
          </h1>
          <Link
            className="my-4 text-sm  dark:text-base-white text-base-black"
            href="/login"
          >
            Ja tem uma conta ? Acesse aqui
          </Link>
        </div>

        <div className="max-w-lg  mx-auto bg-base-white dark:bg-base-black  p-8 rounded-lg">
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
            <div className="mb-4">
              <Submit text="Registrar" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
