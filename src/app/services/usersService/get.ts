import { httpClient } from "../httpClient";

interface Candidate {
  city: string;
  country: string;
  id: string;
  name: string;
  position: string;
  stateProvince: string;
  telephone: string;
  userId: string;
}

export async function getCandidateData() {
  const { data } = await httpClient.get<Candidate>('/candidate/get');

  return data;
}
