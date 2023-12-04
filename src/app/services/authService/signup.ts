import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupReponse {
  accessToken: string
}

export async function signup(params: SignupParams) {
  await sleep();

  const { data } = await httpClient.post<SignupReponse>('/auth/company/signup', params);

  return data;
}
