import DashboadBody from "@/components/DashboadBody/dashboard_body";
import Header from "@/components/Header/header";
import { ReactElement } from "react";

export function Perfil(): ReactElement {
  return (
    <div>
      <Header />
      <div>
        <DashboadBody />
      </div>
    </div>
  );
}

export default Perfil;
