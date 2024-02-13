import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { companyService } from "../../../../app/services/companyService";
import { formatters } from "../../../../app/utils/formatters";

interface Company {
  name: string;
  telephone?: string;
  cnpj: string;
  description?: string;
  city: string;
  country: string;
  stateProvince: string;
}

const schema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  telephone: z.string()
          .trim()
          .min(15, 'Número inválido')
          .max(15, 'Número inválido')
          .transform((phone) => formatters.deserialize(phone)),
  cnpj: z.string().trim().min(14, 'CNPJ inválido').max(18, 'CNPJ inválido').transform((cnpj) => formatters.deserialize(cnpj)),
  description: z.string().trim().max(100, 'Texto muito grande'),
  city: z.string().trim().min(1, 'Cidade é obrigatório'),
  stateProvince: z.string().trim().min(2, 'Estado é obrigatório').max(2, 'Deve conter apenas dois digitos').toUpperCase(),
  country: z.string().trim().min(1, 'País é obrigatório'),
});

type FormData = z.infer<typeof schema>

export function useCompanyFormController() {
  const {
    reset,
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: '',
        telephone: '',
        cnpj: '',
        city: '',
        description: '',
        stateProvince: '',
        country: '',
      }
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: Company) => {
      return companyService.updateCompanyData(data)
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await toast.promise(mutateAsync(data), {
        loading: 'Atualizando informações',
        success: 'Conta atualizada',
        error: 'Ocorreu um erro ao tentar atualizar seus dados'
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar atualizar os dados da sua conta", {
        id: 'account_update',
      });
      reset();
    }
  });

  const CNPJ = watch('cnpj');
  const phone = watch('telephone');

  useEffect(() => {
    setValue('cnpj', formatters.formatCNPJ(CNPJ));
  }, [CNPJ, setValue]);


  useEffect(() => {
    setValue('telephone', formatters.formatPhone(phone));
  }, [phone, setValue]);


  useEffect(() => {
    (async () => {
      const { city,
              country,
              name,
              cnpj,
              description,
              stateProvince,
              telephone } = await companyService.getCompanyData();

      setValue('name', name || '')
      setValue('cnpj', cnpj || '')
      setValue('telephone', telephone || '')
      setValue('city', city || '')
      setValue('stateProvince', stateProvince || '')
      setValue('country', country || '')
      setValue('description', description || '')
    })()
  }, [setValue])

  return { register, errors, handleSubmit, isLoading }
}
