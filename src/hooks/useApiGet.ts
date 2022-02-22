import { API_URL } from "../constants";
import useUser from "../Context/LoginContext/useLoginContext";

const useApiGet = () => {
  const { user } = useUser();

  return async function apiGet<T>(
    endpoint: GetEndpoint,
    params = ""
  ): Promise<T | null> {
    const token = user?.token || null;

    try {
      return (
        await fetch(`${API_URL}${endpoint}${params}`, {
          method: "GET",
          headers: {
            ...(token ? { Authorization: token } : {})
          }
        })
      ).json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
};
export type GetEndpoint = "/products";

export default useApiGet;
