// ______________________________________________________
// 削除ボタン
import React from "react";
import { deleteStyled } from "./style";
import BackspaceIcon from "@material-ui/icons/Backspace";

export type Props = {
  className?: string;
  onClick?: () => void; // クリック時のコールバック
};

const Component: React.FC<Props> = (props) => {
  const { className, onClick } = props;
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button className={className} onClick={handleClick}>
      <BackspaceIcon fontSize="small" color="inherit" />
    </button>
  );
};

export default deleteStyled(Component);
