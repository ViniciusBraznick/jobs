import { httpClient } from "../httpClient";

interface Company {
  name: string;
  telephone?: string;
  cnpj: string;
  description?: string;
  city: string;
  country: string;
  stateProvince: string;
}

export async function updateCompanyData(params: Company) {
  return await httpClient.put('/company/update', params)
}
