import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {toast} from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

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

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data:SignupParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({...data, isCadidate: pathname === '/user/register'});
      toast.success('Conta criada com sucesso');

      navigate("/")

    } catch {
      toast.error('Ocorreu um erro ao criar sua conta')
    }
  });

  return { handleSubmit, register, errors, pathname, isPending };
}
