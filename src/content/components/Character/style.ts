import styled, { css } from "styled-components";
import { flexCenter } from "~/content/util/style";
import { Props } from ".";
export type StyleProps = {};
export default (Component: React.FC<Props>) => styled(Component)<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  user-select: none;
  ${flexCenter}
  & > div {
    position: relative;
    width: 70%;
    height: 70%;
    margin: auto;
  }
`;

type bitProps = {
  x: number;
  y: number;
};
export const Bit = styled.div<bitProps>`
  position: absolute;
  left: ${({ x }) =>
    css`
      ${x}%
    `};
  top: ${({ y }) =>
    css`
      ${y}%
    `};
  width: 0.2rem;
  height: 0.2rem;
  background-color: #fff;
`;

import { Props as UFO_Props } from "./UFO";

export const UFOStyled = (component: React.FC<UFO_Props>) => styled(component)`
  transform: translate(-50%, -50%);
`;
