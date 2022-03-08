import { FC } from "react";
import RoundedIcon from "../RoundedIcon";
import CarritoIMG from "./../../assets/images/cart.svg";

type AddCartProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const AddCart: FC<AddCartProps> = ({ children, onClick }) => {
  return (
    <RoundedIcon onClick={onClick}>
      <img src={CarritoIMG} alt='añadir producto' />
      {children}
    </RoundedIcon>
  );
};

export default AddCart;
