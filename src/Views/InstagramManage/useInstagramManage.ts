import useApiPost from "hooks/useApiPost";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useInstagramManage = () => {
  const [instagramPostUrl, setInstagramPostUrl] = useState("");
  const apiPost = useApiPost();
  const navigate = useNavigate();

  const saveInstagramPostUrl = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      await apiPost("/instagram", { url: instagramPostUrl });
      navigate("/admin/instagram");
    },
    [instagramPostUrl]
  );

  const handleChangeInstgramUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstagramPostUrl(e.target.value);
  };

  return { instagramPostUrl, handleChangeInstgramUrl, saveInstagramPostUrl };
};

export default useInstagramManage;
