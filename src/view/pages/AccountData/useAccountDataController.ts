import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usersService } from "../../../app/services/candidateService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

interface Candidate {
  city: string;
  country: string;
  name: string;
  position: string;
  stateProvince: string;
  telephone: string;
}

const schema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  position: z.string().trim().min(1, 'Cargo é obrigatório'),
  telephone: z.string()
          .trim()
          .max(15, 'Número inválido')
          .transform((phone) => phone.replace(/[^a-zA-Z0-9]/g, "")),
  city: z.string().trim().min(1, 'Cidade é obrigatório'),
  stateProvince: z.string().trim().min(2, 'Estado é obrigatório').max(2, 'Deve conter apenas dois digitos').toUpperCase(),
  country: z.string().trim().min(1, 'País é obrigatório'),
});

type FormData = z.infer<typeof schema>

export function useAccountDataController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: '',
        position: '',
        telephone: '',
        city: '',
        stateProvince: '',
        country: '',
      }
  });


  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: Candidate) => {
      return usersService.updateUserData(data)
    },
  });


  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutate(data);

      toast.success("Conta atualizada", {
        id: 'account_update'
      })

    } catch {
      toast.error("Usuário ou senha incorreto", {
        id: 'login'
      })
    }
  });

  const telephone = watch('telephone');

  useEffect(() => {
    setValue('telephone', telephone.replace(/\D/g,'').replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))
  }, [telephone, setValue]);


  useEffect(() => {
    (async () => {
      const { city,
              country,
              name,
              position,
              stateProvince,
              telephone } = await usersService.getCandidateData();

      setValue('name', name)
      setValue('position', position)
      setValue('telephone', telephone)
      setValue('city', city)
      setValue('stateProvince', stateProvince)
      setValue('country', country)

    })()
  }, [setValue])

  return { register, errors, handleSubmit, isLoading }
}



