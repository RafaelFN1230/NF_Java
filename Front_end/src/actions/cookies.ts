"use server";

import { cookies } from "next/headers";

export async function getCookies(name: string): Promise<number | null> {
  "use server";
  const token = cookies().get(name);
  let token_value: number | null = null;
  if (token !== undefined) {
    token_value = parseInt(token.value);
  }
  return token_value;
}

export async function createCookies(name: string, value: number) {
  "use server";
  const now = new Date();
  const expires = new Date(
    now.getFullYear() + 10,
    now.getMonth(),
    now.getDate(),
  );
  cookies().set(name, value.toString(), { expires: expires });
}

export async function deleteCookies(name: string) {
  "use server";
  cookies().delete(name);
}
