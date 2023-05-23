import { API_URL } from "@/config/index";

export const fetchFamousRoasters = async () => {
  const response = await fetch(`${API_URL}/api/famousRoasters`);
  const famousRoasters = await response.json();
  return famousRoasters;
};
