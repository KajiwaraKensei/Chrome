import styled from "styled-components";
import { flexCenter, center } from "~/util/style"
import {width} from ".."
const c = 100 / 2
export type StyleProps = {
  isOpen?: boolean
}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  position: absolute;
  top: ${c / 2}px;
  left: -${c + 15}px;
  ${({isOpen})=>!isOpen && center}
  width: ${c}px;
  height: ${c}px;
  background-color: #9dd;
  border-radius: 50%;
  ${flexCenter}
`;
