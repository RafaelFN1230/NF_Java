"use server";

import { ValidateUser } from "../repositories/repositories";
import { createCookies } from "@/actions/cookies";

export const validateUserUsecase = async (email: string, password: string) => {
  try {
    const response = await ValidateUser({
      email: email,
      senha: password,
    });
    console.log("response: ", response);
    if (response) {
      await createCookies("user_id", response.id);
      return "authorized";
    }
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) {
        return "unauthorized";
      } else if (error.response.status === 500) {
        return "server-error";
      }
    }
    return "server-error";
  }
};
