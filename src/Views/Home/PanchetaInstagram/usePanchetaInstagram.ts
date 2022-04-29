import useApiGet from "hooks/useApiGet";
import { useMemo, useState } from "react";
import { InstagramPostType } from "types/InstagramPost";

const usePanchetaInstagram = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPostType[]>();
  const apiGet = useApiGet();

  useMemo(async () => {
    const response = await apiGet<InstagramPostType[]>("/instagram");

    if (response) {
      setInstagramPosts(response);
    }
  }, []);

  return { instagramPosts };
};

export default usePanchetaInstagram;
