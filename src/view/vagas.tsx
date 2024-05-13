import Header from "@/components/Header/header";
import VagasBody from "@/components/vagas/vagas";
import { ReactElement } from "react";

export function Vagas(): ReactElement {
  return (
    <div>
      <Header />
      <div>
        <VagasBody />
      </div>
    </div>
  );
}

export default Vagas;
