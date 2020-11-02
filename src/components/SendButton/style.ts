import styled, { css } from "styled-components";

export type StyleProps = {

}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: #fdf;
  border-radius: 50%;
`;
