import styled, { css } from "styled-components";
import { flexCenter } from "~/util/style"
import {Props} from "."
export type StyleProps = {
 
}
export default (Component: React.FC<Props>) => styled(Component)<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 50%;
  z-index: 100;
  ${flexCenter}
`;
