"use client";
import Link from "next/link";
import { Alert, useAlert } from "@/components/alert/Alert";
import { useFormState } from "react-dom";
import { userLogin } from "./actions";
import { useEffect, useState } from "react";
import { StateTypes, PropsFormLogin } from "./types";
import Submit from "@/components/form/Submit";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeOff, Eye } from "lucide-react";

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
              <EyeOff color="#1c1d21" size="16" />
            </span>
          )}
          {look == true && (
            <span
              className="flex items-center absolute right-2 top-9 gap-2  text-sm dark:text-base-white text-base-black"
              onClick={passLook}
            >
              <Eye color="#1c1d21" size="16" />
            </span>
          )}

          <p className="text-red-500 text-[11px]">
            {state?.data.errors.password}
          </p>
        </div>
        <div className="mb-5">
          <label className="flex gap-2 dark:text-base-white">
            <Checkbox
              name="remember"
              defaultChecked={remember ? true : false}
            />
            Lembrar-me
          </label>
        </div>

        <div className="mb-12">
          <Submit text="Logar" />
        </div>
      </form>
    </>
  );
};

export default FormLogin;
