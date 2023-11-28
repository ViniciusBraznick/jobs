import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { authService } from '../../../app/services';
import { SignupParams } from '../../../app/services/signup';
import {toast} from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(32, 'o nome deve conter no máximo 32 caracteres'),
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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data:SignupParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error('Ocorreu um erro ao criar sua conta', {
        style: {
          fontFamily: 'var(--fonts-outfit)'
        },
      })
    }
  });

  return { handleSubmit, register, errors, pathname, isPending };
}
