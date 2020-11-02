import styled, { css } from "styled-components";

export type StyleProps = {

}
export default (Component: React.FC) => styled(Component)<StyleProps>`
  position: absolute;
  bottom: .5rem;
  left: -1.5rem;
  width: 1rem;
  height: 1rem;
  background-color: #ddf;
  border-radius: 50%;
`;
