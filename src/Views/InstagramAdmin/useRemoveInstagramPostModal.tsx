import { useCallback } from "react";
import usePromptContext from "Context/PromptContext/usePromptContext";
import { InstagramPostType } from "types/InstagramPost";
import ModalRemoveItem from "Components/ModalRemoveItem";

const useRemoveInstagramPostModal = () => {
  const prompt = usePromptContext();

  const openRemoveInstagramPostModal = useCallback(
    async (instagramPost: InstagramPostType, onAccept: () => void) => {
      await prompt<React.FC>(({ onClose }) => {
        return (
          <ModalRemoveItem
            onAccept={onAccept}
            onClose={onClose}
            textTitle={`¿Estas seguro que quiere eliminar la publicación ${instagramPost.url}?`}
          />
        );
      });
    },
    []
  );

  return { openRemoveInstagramPostModal };
};

export default useRemoveInstagramPostModal;
