import React from "react";
import styled from "./style";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={className}>config</div>;
};

export default styled(Component);