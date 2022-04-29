import { useCallback } from "react";
import usePromptContext from "Context/PromptContext/usePromptContext";
import { Product } from "types/Product";
import ModalRemoveItem from "Components/ModalRemoveItem";

const useRemoveProductModal = () => {
  const prompt = usePromptContext();

  const openRemoveProductModal = useCallback(
    async (product: Product, onAccept: () => void) => {
      await prompt<React.FC>(({ onClose }) => {
        return (
          <ModalRemoveItem
            onAccept={onAccept}
            onClose={onClose}
            textTitle={`¿Estas seguro que quiere eliminar el Producto; ${product.name}`}
          />
        );
      });
    },
    []
  );

  return { openRemoveProductModal };
};

export default useRemoveProductModal;
