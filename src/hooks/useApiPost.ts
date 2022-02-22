import { API_URL } from "../constants";
import useUser from "../Context/LoginContext/useLoginContext";

const useApiPost = () => {
  const { user } = useUser();

  return async function apiPost<T>(
    endpoint: PostEndpoint,
    body?:
      | FormData
      | string[]
      | Record<string, number | string | string[] | boolean | File | FormData>,
    params = "",
    method: "POST" | "PUT" | "DELETE" = "POST"
  ): Promise<T | string> {
    const token = user?.token || null;
    const isFormData = typeof (body as FormData)?.append === "function";

    try {
      return (
        await fetch(`${API_URL}${endpoint}${params}`, {
          method: method,
          headers: {
            ...(!isFormData
              ? {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              : { Accept: "*/*" }),
            ...(token ? { Authorization: token } : {})
          },
          body: !isFormData ? JSON.stringify(body) : (body as FormData)
        })
      ).json();
    } catch (error) {
      console.error(error);
      return error as string;
    }
  };
};

export type PostEndpoint =
  | "/products"
  | "/register"
  | "/login"
  | "/image-product";

export default useApiPost;
