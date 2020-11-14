import { Props } from ".";
import { FC } from "react";
import styled, { keyframes, css } from "styled-components";
type StyledProps = {};
export default (component: FC<Props>) => styled(component)<StyledProps>`
  color: #fff;
  & > h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 300;
    font-size: 0.9rem;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 0.3rem;
    padding: 0.5rem;
    &:hover {
      border: 1px solid #abd;
      .reset_icon {
        transform: rotate(-360deg);
      }
    }
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

type ResetProps = {
  loading?: string;
};
export const ResetButton = styled.div<ResetProps>`
  margin-left: 0rem;
  display: block;
  transition: 0.3s;
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ loading }) =>
    loading === "true" &&
    css`
      animation: ${rotateAnimation} 2s linear infinite;
    `}
`;
