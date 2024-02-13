import { useAuth } from "../../../../app/hooks/useAuth";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { FormGroup } from "../../../components/FormGroup";
import { Input } from "../../../components/Input";
import { useCompanyFormController } from "./useCompanyFormController";

export default function CompanyForm() {
  const { user } = useAuth();

  const {
    register,
    errors,
    handleSubmit,
    isLoading
  } = useCompanyFormController();

  return (
    <form>
      <Card fullWidth>
          <FormGroup>
            <Input {...register('name')} error={errors.name?.message} type="text" placeholder="Nome Completo" autoComplete="off" />
            <Input {...register('cnpj')} error={errors.cnpj?.message} type="text" maxLength={18} placeholder="CNPJ" />
          </FormGroup>

          <FormGroup>
            <Input disabled type="email" placeholder="E-mail" autoComplete="off" value={user?.email}/>
            <Input {...register('telephone')} error={errors.telephone?.message} type="tel" placeholder="Telefone" maxLength={15} autoComplete="on"/>
          </FormGroup>

          <FormGroup>
            <Input {...register('city')} error={errors.city?.message} type="text" placeholder="Cidade" autoComplete="off" />
            <Input {...register('stateProvince')} error={errors.stateProvince?.message} type="text" placeholder="Estado" maxLength={2} autoComplete="off" />
            <Input {...register('country')} error={errors.country?.message} type="text" placeholder="País" autoComplete="off" />
          </FormGroup>

          <FormGroup>
            <Input {...register('description')} error={errors.description?.message} type="text" placeholder="Descrição" autoComplete="off" />
          </FormGroup>
      </Card>

      <Button loading={isLoading} onClick={handleSubmit} type='submit' css={{
          margin: '24px 0 24px auto',
        }}>
        Salvar Alterações
      </Button>
    </form>
  )
}
