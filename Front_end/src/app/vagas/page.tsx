"use server";

import { getCookies } from "@/actions/cookies";
import { Vagas } from "@/view/vagas";

export default async function InvoicesPage() {
  const user_id = await getCookies("user_id");

  return (
    <>
      <title>Vagas</title>
      <Vagas user_id={user_id} />
    </>
  );
}
