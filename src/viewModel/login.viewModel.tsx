import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validateUserUsecase } from "@/use_cases/validate.user";

export default function LoginViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleClickForgotPassword = async () => {
    router.push("/forgot-password");
  };

  const formSchema = z.object({
    username: z
      .string()
      .min(1, {
        message: "Favor inserir usuário.",
      })
      .email("E-mail inválido."),
    password: z.string().min(6, {
      message: "Favor inserir senha.",
    }),
  });

  const router = useRouter();

  function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    });

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
      const resultValidate = await validateUserUsecase(
        values.username,
        values.password,
      );
      switch (resultValidate) {
        case "authorized":
          console.log("authorized");
          router.push("/");
          break;

        case "unauthorized":
          setErrorMessage("Usuário ou senha inválida");
          console.log("unauthorized");
          break;

        case "server-error":
          setErrorMessage("Erro de conexão");
          console.log("server error");
          break;
      }
    }, []);

    return { form, onSubmit };
  }

  return {
    handleClickForgotPassword,
    ProfileForm,
    errorMessage,
  };
}
function toast(arg0: string, arg1: { type: string }) {
  throw new Error("Function not implemented.");
}
