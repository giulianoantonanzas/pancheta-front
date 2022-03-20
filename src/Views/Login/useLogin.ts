import { useCallback, useState } from "react";
import useUser from "../../Context/LoginContext/useLoginContext";
import User from "../../Context/LoginContext/UserType";
import useApiPost from "../../hooks/useApiPost";

const useLogin = () => {
  const { setUser } = useUser();
  const apiPost = useApiPost();
  const [formData, setFormData] = useState<User>();

  const submitForm = useCallback(
    async (username?: string, password?: string) => {
      if (username && password) {
        const user = (await apiPost<User>("/login", {
          username,
          password
        })) as User;
        setUser(user);
        user.token && localStorage.setItem("panchetaToken", user?.token);
      }
    },
    [formData]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(formData?.username, formData?.password);
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, username: e.target.value }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, password: e.target.value }));
  };

  return { handleSubmit, formData, handleChangeUsername, handleChangePassword };
};

export default useLogin;
