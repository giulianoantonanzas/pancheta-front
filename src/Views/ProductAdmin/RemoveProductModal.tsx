import { FC, Fragment } from "react";
import { Product } from "../../types/Product";

type RemoveProductModalProps = {
  product: Product;
  onAccept?: (productID: string) => void | Promise<void> | unknown;
};

const RemoveProductModal: FC<RemoveProductModalProps> = ({
  product,
  onAccept
}) => {
  return (
    <Fragment>
      <h3>
        ¿Estas seguro que quiere eliminar el Producto &quot;{product.name}
        &quot;
      </h3>

      {onAccept && (
        <button
          className='btn btn-primary text-white'
          onClick={() => {
            if (product?.id) onAccept(product.id.toString());
          }}>
          Si
        </button>
      )}
    </Fragment>
  );
};

export default RemoveProductModal;
