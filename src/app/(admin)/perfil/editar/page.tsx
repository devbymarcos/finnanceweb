import CardStyle from "@/components/cards/CardStyle";
import React from "react";
import { getUserApi } from "@/http/api";
import { cookies } from "next/headers";
import FormPerfil from "./FormPerfil";

async function getUser() {
  const token = cookies().get("token")?.value;
  const { url, options } = getUserApi(token);
  const response = await fetch(url, options);
  return response.json();
}

const CreateCategory = async () => {
  const user = await getUser();

  return (
    <section>
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Perfil
      </h1>
      <CardStyle>
        <FormPerfil user={user.data} />
      </CardStyle>
    </section>
  );
};

export default CreateCategory;
