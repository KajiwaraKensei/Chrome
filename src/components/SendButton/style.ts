import styled from "styled-components";
import { flexCenter, center } from "~/util/style"
import {width} from ".."
const c = 100 / 1.5

export type StyleProps = {
  isOpen?: boolean
}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  position: absolute;
  top: -${c / 2 + 10}px;
  left: -${c / 2 + 10}px;
  ${({isOpen})=>!isOpen && center}
  width: ${c}px;
  height: ${c}px;
  background-color: #d99;
  border-radius: 50%;
  ${flexCenter}
`;
