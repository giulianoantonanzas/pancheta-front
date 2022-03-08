import { FC, useEffect, useState } from "react";
import Style from "./style.module.scss";

type RoundedIconProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  medium?: boolean;
};

const RoundedIcon: FC<RoundedIconProps> = ({ children, onClick, medium }) => {
  const [clicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => setHasClicked(false), 100);
    }
  }, [clicked]);

  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onClick?.();
        setHasClicked(true);
      }}
      className={`${Style.roundedIcon} ${medium ? Style.medium : ""} ${
        clicked ? Style.clicked : ""
      }`}>
      {children}
    </button>
  );
};

export default RoundedIcon;
