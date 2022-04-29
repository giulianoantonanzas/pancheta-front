import useApiGet from "hooks/useApiGet";
import useApiPost from "hooks/useApiPost";
import { useCallback, useMemo, useState } from "react";
import { InstagramPostType } from "types/InstagramPost";

const useInstagramPost = () => {
  const [instagramPosts, setInstagramPost] = useState<InstagramPostType[]>();
  const apiGet = useApiGet();
  const apiPost = useApiPost();

  useMemo(async () => {
    const response = await apiGet<InstagramPostType[]>("/instagram");

    if (response) {
      setInstagramPost(response);
    }
  }, []);

  const removeInstagramPost = useCallback(async (idPost: string) => {
    await apiPost("/instagram", undefined, `/${idPost}`, "DELETE");
    window.location.reload();
  }, []);

  return { instagramPosts, removeInstagramPost };
};

export default useInstagramPost;
