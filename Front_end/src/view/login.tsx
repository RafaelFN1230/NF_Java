import { ReactElement } from "react";
import Login from "@/components/login/login";

export function LoginComponents(): ReactElement {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login />
    </div>
  );
}

export default LoginComponents;
