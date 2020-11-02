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
  bottom: ${width * 3}rem;
  right: ${width * 3}rem;
  width: 100px;
  height: 100px;
  color: #fff;
  ${flexCenter}
  z-index: 999;
  & > * {
    box-sizing: border-box;
  }
`;
