import Header from "@/components/Header/header";
import VagasBody from "@/components/vagas/vagas";
import { ReactElement } from "react";

interface VagasProps {
  user_id: number | null;
}

export function Vagas({ user_id }: VagasProps): ReactElement {
  return (
    <div>
      <Header />
      <div>
        <VagasBody user_id={user_id} />
      </div>
    </div>
  );
}

export default Vagas;
