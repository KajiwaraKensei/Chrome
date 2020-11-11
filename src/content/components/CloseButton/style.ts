import styled from "styled-components";
import { flexCenter, center } from "~/content/util/style";
import { width } from "..";
import { Props } from ".";

export type StyleProps = {
  isOpen?: boolean;
};

const c = 100 / 2.5;
export default (Component: React.FC<Props>) => styled(Component)<StyleProps>`
  position: absolute;
  bottom: -${c / 2}px;
  left: -${c + 10}px;
  ${({ isOpen }) => !isOpen && center}
  width: ${c}px;
  height: ${c}px;
  background-color: #99d;
  border-radius: 50%;
  ${flexCenter}
  cursor: pointer;
`;
