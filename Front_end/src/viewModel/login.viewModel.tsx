import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { navigate } from "@/actions/navigate";
import { validateUserUsecase } from "@/use_case/validate.user";

export default function LoginViewModel() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);


  const formSchema = z.object({
    username: z
      .string()
      .min(1, {
        message: 'Favor inserir usuário.'
      })
      .email('E-mail inválido.'),
    password: z.string().min(6, {
      message: 'Favor inserir senha.'
    })
  });

  function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        password: ''
      }
    });

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
      console.log("DADOS Enviados: ", values);
      setLoading(true)
      const resultValidate = await validateUserUsecase(
        values.username,
        values.password
      );
      switch (resultValidate) {
        case 'authorized':
          navigate('/')
          break;

        case 'unauthorized':
          setLoading(false)
          setErrorMessage('Email ou senha inválida');
          break;

        case 'server-error':
          setLoading(false)
          setErrorMessage('Não é possivel acessar o sistema no momento!');
          break;

        default:
          setLoading(false)
          setErrorMessage('Não é possivel acessar o sistema no momento!');
          break;
      }
    }, []);

    return { form, onSubmit };
  }

  return {
    ProfileForm,
    errorMessage,
    loading
  };
}
