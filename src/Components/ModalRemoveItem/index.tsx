import { FC, Fragment } from "react";

type ModalRemoveItemProps = {
  textTitle: string;
  onAccept?: () => void;
  onClose: () => void;
};

const ModalRemoveItem: FC<ModalRemoveItemProps> = ({
  textTitle,
  onAccept,
  onClose
}) => {
  return (
    <div onClick={e => e.stopPropagation()}>
      <Fragment>
        <h3>{textTitle}</h3>

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
};

export default ModalRemoveItem;
