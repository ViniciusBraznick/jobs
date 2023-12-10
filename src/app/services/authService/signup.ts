import { httpClient } from "../httpClient";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
  userType: string;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupParams) {
  const route = params.userType === 'empresa' ? '/auth/company/signup' : '/auth/candidate/signup';

  const { data } = await httpClient.post<SignupResponse>(route, params);

  return data;
}
