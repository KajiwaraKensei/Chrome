import styled, { css } from "styled-components";

export type StyleProps = {

}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  position: absolute;
  top: -.9rem;
  right: 1rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #ddf;
  border-radius: 50%;
`;
