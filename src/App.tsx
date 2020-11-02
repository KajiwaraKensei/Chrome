import React from "react";
import styled from "styled-components";
import App, { width } from "~/components";
import { flexCenter } from "~/util/style";
type Props = {
  className?: string;
};
const Component: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <App />
  </div>
);

export default styled(Component)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: ${width}px;
  height: ${width}px;
  color: #fff;
  ${flexCenter}
  z-index: 999;
  & > * {
    box-sizing: border-box;
  }
`;
