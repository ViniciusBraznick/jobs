import { httpClient } from "../httpClient";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
  isCadidate: boolean;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupParams) {
  const route = params.isCadidate ? '/auth/candidate/signup' : '/auth/company/signup';

  const { data } = await httpClient.post<SignupResponse>(route, params);

  return data;
}
