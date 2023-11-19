import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useLocation } from 'react-router-dom';

const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').max(32, 'o nome deve conter no máximo 32 caracteres'),
  email: z.string().min(1, 'E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
})

type formData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema)
  });

  const { pathname } = useLocation();

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('Chama API com: ', data);
  });

  return { handleSubmit, register, errors, pathname };
}
