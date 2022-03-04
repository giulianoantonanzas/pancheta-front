import { Fragment, useCallback } from "react";
import usePromptContext from "../../Context/PromptContext/usePromptContext";
import { Product } from "../../types/Product";

const useRemoveProductModal = () => {
  const prompt = usePromptContext();

  const openRemoveProductModal = useCallback(
    async (product: Product, onAccept: () => void) => {
      await prompt<React.FC>(({ onClose }) => {
        return (
          <div onClick={e => e.stopPropagation()}>
            <Fragment>
              <h3>
                ¿Estas seguro que quiere eliminar el Producto &quot;
                {product.name}
                &quot;
              </h3>

              <div className='d-flex justify-content-center gap-3 my-4'>
                {onAccept && (
                  <button
                    className='btn btn-primary text-white p-2 w-25'
                    onClick={() => {
                      onAccept();
                      onClose();
                    }}>
                    Si
                  </button>
                )}

                <button
                  className='btn btn-outline-primary p-2 w-25'
                  onClick={() => {
                    onClose();
                  }}>
                  No
                </button>
              </div>
            </Fragment>
          </div>
        );
      });
    },
    []
  );

  return { openRemoveProductModal };
};

export default useRemoveProductModal;
