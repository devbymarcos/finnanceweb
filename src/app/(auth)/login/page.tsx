"use client";
import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Image from "next/image";
import { Alert, useAlert } from "@/components/alert/Alert";

import { useFormState, useFormStatus } from "react-dom";
import { userLogin } from "./actions";
import { useEffect } from "react";
import { StateTypes } from "./types";
import Submit from "@/components/form/Submit";

const initialState: StateTypes = {
  data: {
    errors: {
      email: "",
      password: "",
    },
    message: "",
  },
};

const Login = () => {
  const [state, formAction] = useFormState(userLogin, initialState);

  const { alert, setAlert } = useAlert();

  useEffect(() => {
    if (state.data.message) {
      setAlert({
        active: true,
        message: state.data.message,
        type: "error",
      });
    }
  }, [state]);
  return (
    <>
      <Alert {...alert} />
      <section className="grid md:grid-cols-2   ">
        <div className="self-center">
          <div className="mb-3 w-full max-w-[300px] mx-auto">
            <h1 className="mb-2 text-lg font-bold  dark:text-base-white text-base-black">
              Insira os dados e acesse
            </h1>
          </div>

          <div className="w-full max-w-[300px] mx-auto bg-base-white dark:bg-base-black  p-8 rounded-lg">
            <form action={formAction}>
              <div className="mb-6">
                <Label>Email</Label>
                <Input type="text" name="email" />
                <p className="text-red-500 text-[11px] ">
                  {state?.data.errors.email}
                </p>
              </div>
              <div className="mb-12">
                <Label>Password</Label>
                <Input type="password" name="password" />
                <p className="text-red-500 text-[11px]">
                  {state?.data.errors.password}
                </p>
              </div>
              <div className="mb-12">
                <Submit text="Logar" />
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

        <div className="w-full hidden md:flex items-center justify-center   bg-base-yellow">
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
