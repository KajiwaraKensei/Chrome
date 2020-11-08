import React from "react";
import styled from "./style";
export type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};
export const width = 3;

const Component: React.FC<Props> = (props) => {
  const { className, onClick } = props;
  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event);
  };
  return (
    <div onClick={handleClick} className={className}>
      Character
    </div>
  );
};

export default styled(Component);
