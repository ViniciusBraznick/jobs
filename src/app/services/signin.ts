import { sleep } from "../utils/sleep";
import { httpClient } from "./httpClient";

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninReponse {
  token: string;
}

export async function signin(params: SigninParams) {
  await sleep();

  const { data } = await httpClient.post<SigninReponse>('/auth/login', params);

  return { data };
}
