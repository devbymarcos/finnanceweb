"use client";
import Link from "next/link";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useFormState } from "react-dom";
import { userLogin } from "./actions";
import { useEffect, useState } from "react";
import { StateTypes, PropsFormLogin } from "./types";
import Submit from "@/components/form/Submit";
import EyeOff from "@/components/icons/EyeOff";
import EyeOn from "@/components/icons/EyeOn";

const initialState: StateTypes = {
  data: {
    errors: {
      email: "",
      password: "",
    },
    message: "",
  },
};

const FormLogin = ({ remember }: PropsFormLogin) => {
  const [state, formAction] = useFormState(userLogin, initialState);
  const { alert, setAlert } = useAlert();
  const [look, setLook] = useState(false);

  function passLook(e: any) {
    e.preventDefault();
    setLook(!look);
  }

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
      <form action={formAction}>
        <div className="mb-6">
          <Label>Email</Label>
          <Input id="email" type="text" name="email" defaultValue={remember} />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.email}
          </p>
        </div>
        <div className="mb-5 relative">
          <Label>Password</Label>
          <Input type={look == false ? "password" : "text"} name="password" />
          {look == false && (
            <span
              className="flex items-center absolute right-2 top-9 gap-2 text-sm dark:text-base-white text-base-black"
              onClick={passLook}
            >
              <EyeOff colors="#1c1d21" />
            </span>
          )}
          {look == true && (
            <span
              className="flex items-center absolute right-2 top-9 gap-2  text-sm dark:text-base-white text-base-black"
              onClick={passLook}
            >
              <EyeOn colors="#1c1d21" />
            </span>
          )}

          <p className="text-red-500 text-[11px]">
            {state?.data.errors.password}
          </p>
        </div>
        <div className="mb-5">
          <label className="flex gap-2 dark:text-base-white">
            <input
              type="checkbox"
              name="remember"
              defaultChecked={remember ? true : false}
            />
            Lembrar-me
          </label>
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
    </>
  );
};

export default FormLogin;
