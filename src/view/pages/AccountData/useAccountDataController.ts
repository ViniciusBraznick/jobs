import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  position: z.string().min(1, 'Cargo é obrigatório'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatório'),
  estate: z.string().min(2, 'UF').max(2),
  country: z.string().min(1, 'País é obrigatório'),
});

type FormData = z.infer<typeof schema>

export function useAccountDataController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
      resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data);
  });

  return { register, errors, handleSubmit }
}
