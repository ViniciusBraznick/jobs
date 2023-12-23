import { User } from "../../entities/User";
import { httpClient } from "../httpClient";

type CheckAuthReponse = User;


export async function checkAuth() {
  const { data } = await httpClient.get<CheckAuthReponse>('/auth/check');

  return data;
}
