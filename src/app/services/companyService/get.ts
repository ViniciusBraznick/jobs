import { httpClient } from "../httpClient";

interface Company {
  id: string;
  userId: string;
  name: string;
  telephone: string;
  cnpj: string;
  description: string;
  city: string;
  stateProvince: string;
  country: string;
}

export async function getCompanyData() {
  const { data } = await httpClient.get<Company>('/company/get');

  return data;
}
