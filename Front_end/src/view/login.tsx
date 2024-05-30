import { ReactElement } from "react";
import Login from "@/components/login/login";
import { Toaster } from "sonner";

export function LoginComponents(): ReactElement {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login />
      <Toaster richColors closeButton />
    </div>
  );
}

export default LoginComponents;
