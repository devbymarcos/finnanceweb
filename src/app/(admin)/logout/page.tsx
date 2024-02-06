import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Logout = () => {
  async function logoutForm(formData: FormData) {
    "use server";

    cookies().delete("token");
    redirect("/login");
  }

  return (
    <div>
      <h1>Tem certeza que deseja sair?</h1>
      <form action={logoutForm}>
        <input type="hidden" value="logout" name="logout" />
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Logout;
