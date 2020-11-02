import styled, { css } from "styled-components";

export type StyleProps = {

}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 50%;
`;
