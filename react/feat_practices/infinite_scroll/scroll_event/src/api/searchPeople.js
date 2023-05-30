import { httpClient } from "../httpClient";

export const searchPeople = async (page) => {
  const response = await httpClient.fetch(`people/${page}`);
  const data = await response.json();
  const { count, next, previous, results } = data;
  return { count, next, previous, results };
};
