"use client";

import { Alert, useAlert } from "@/components/alert/Alert";
import { useFormState } from "react-dom";
import { userLogin } from "./actions";
import { use, useEffect, useState } from "react";
import { StateTypes } from "./types";
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

const FormLogin = () => {
  const [state, formAction] = useFormState(userLogin, initialState);
  const { alert, setAlert } = useAlert();
  const [look, setLook] = useState(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [loginRemember, setLoginRemember] = useState<string>("");

  function passLook(e: any) {
    e.preventDefault();
    setLook(!look);
  }

  const createdRemember = () => {
    const getRemember = localStorage.getItem("finnance_login_remember");
    if (getRemember) {
      localStorage.removeItem("finnance_login_remember");
      setRemember(false);
    } else {
      localStorage.setItem("finnance_login_remember", loginRemember);
      setRemember(true);
    }
  };

  useEffect(() => {
    const getRemember = localStorage.getItem("finnance_login_remember");
    if (getRemember) {
      setLoginRemember(getRemember);
      setRemember(true);
    }
  }, []);

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
          <Input
            className="border-base-secondary"
            id="email"
            type="text"
            name="email"
            value={loginRemember}
            onChange={(e) => setLoginRemember(e.target.value)}
          />
          <p className="text-red-500 text-[11px] ">
            {state?.data.errors.email}
          </p>
        </div>
        <div className="mb-5 relative">
          <Label>Password</Label>
          <Input
            className="border-base-secondary"
            type={look == false ? "password" : "text"}
            name="password"
          />
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
              checked={remember}
              onCheckedChange={() => {
                createdRemember();
              }}
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
