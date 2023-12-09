import { httpClient } from "../httpClient";

interface CheckAuthReponse {
  token: string;
}


export async function checkAuth() {
  const { data } = await httpClient.get<CheckAuthReponse>('/auth/check');

  return { data };
}
