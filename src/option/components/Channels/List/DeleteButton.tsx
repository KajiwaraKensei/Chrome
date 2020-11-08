import React from "react";
import { deleteStyled } from "./style";
export type Props = {
  className?: string;
  onClick?: () => void;
};

const Component: React.FC<Props> = (props) => {
  const { className, onClick } = props;
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button className={className} onClick={handleClick}>
      delete
    </button>
  );
};

export default deleteStyled(Component);
