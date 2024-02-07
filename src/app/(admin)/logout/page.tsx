import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
import BackPage from "./BackPage";

const Logout = () => {
  async function logoutForm(formData: FormData) {
    "use server";

    cookies().delete("token");
    redirect("/login");
  }

  return (
    <div>
      <h1 className="font-bold text-lg">Tem certeza que deseja sair?</h1>
      <div className="flex gap-3">
        <BackPage>Continuar no app</BackPage>
        <form action={logoutForm}>
          <input type="hidden" value="logout" name="logout" />
          <button className="px-4 py-2 my-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg ">
            Sair
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logout;
