"use server";
import axios from "axios";

const getData = async () => {
  const options = { method: "GET", url: "http://localhost:8080/funcionarios" };

  try {
    const data = await axios.request(options);
    console.log(data.data);
    const final = data.data;
    return final;
  } catch (error) {
    return error;
  }
};

import Dashboard from "@/view/dashboard";

export default async function InvoicesPage() {
  const x = await getData();
  return (
    <>
      <title>Dashboard </title>
      <Dashboard />
    </>
  );
}
