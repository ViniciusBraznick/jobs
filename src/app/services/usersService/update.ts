import { httpClient } from "../httpClient";

interface Candidate {
  city: string;
  country: string;
  name: string;
  position: string;
  stateProvince: string;
  telephone: string;
}

export async function updateUserData(params: Candidate) {
  return await httpClient.put('/candidate/update', params)
}
