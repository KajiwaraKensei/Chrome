// ______________________________________________________
// ボツ
import React from "react";
import styled from "./style";
export type Props = {
  className?: string;
  onClose?: () => void;
};
export const width = 3;

const Component: React.FC<Props> = (props) => {
  const { className, onClose } = props;
  const handleClick = () => {
    onClose && onClose();
  };
  return (
    <div onClick={handleClick} className={className}>
      Close
    </div>
  );
};

export default styled(Component);
