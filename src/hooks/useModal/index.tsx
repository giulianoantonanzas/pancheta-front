import { useCallback } from "react";
import usePromptContext from "../../Context/PromptContext/usePromptContext";

const useModal = () => {
  const prompt = usePromptContext();

  const openModal = useCallback(async (children: Element) => {
    await prompt<React.FC>(props => {
      return (
        <div onClick={e => e.stopPropagation()} {...props}>
          {children}
        </div>
      );
    });
  }, []);

  return { openModal };
};

export default useModal;
