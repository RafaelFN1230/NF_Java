import DashboadBody from "@/components/DashboadBody/dashboard_body";
import Header from "@/components/Header/header";
import PerfilComponents from "@/components/Perfil/perfil";
import { ReactElement } from "react";

export function Perfil(): ReactElement {
  return (
    <div>
      <Header />
      <div>
        <PerfilComponents />
      </div>
    </div>
  );
}

export default Perfil;
