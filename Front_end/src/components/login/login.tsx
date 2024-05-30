"use client";

import { Input } from "../ui/input";
import Image from "next/image";
import logo from "@/assets/images/svg/logo.svg";
import LoginViewModel from "@/viewModel/login.viewModel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { LoadingButton } from "../ui/loading.button";

export function Login() {
  const { ProfileForm, errorMessage, loading } = LoginViewModel();

  const { form, onSubmit } = ProfileForm();
  return (
    <div className="w-full max-w-xs">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <Image
            src={logo}
            alt="Logo Nexxo"
            width={320}
            height={160}
            className="flex justify-center"
          />
          <div className="mb-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="************"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-center">
            <LoadingButton
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              loading={loading}
            >
              Entrar
            </LoadingButton>
          </div>
          <div className="w-full max-w-xs">
            {errorMessage && (
              <p className="font-bold text-sm text-red-500">{errorMessage}</p>
            )}
          </div>
        </form>
      </Form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024 Nexxo Empresarial. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
