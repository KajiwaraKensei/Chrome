import React from "react";
import styled from "./style";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={className}></div>;
};

export default styled(Component);
