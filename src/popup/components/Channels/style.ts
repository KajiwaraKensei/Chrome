// ______________________________________________________
// Channelsのスタイル
import { Props } from ".";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

// ______________________________________________________
// 
type StyledProps = {};

export default (component: FC<Props>) => styled(component)<StyledProps>`
  border: none !important;
  display: block !important;
  padding: 0 !important;
  .setting_icon {
    position: absolute;
    top: calc(50% - 11px);
    right: 0.5rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #ddd;
      animation: ${rotateAnimation} 3s linear infinite;
    }
  }
  h2 {
    position: relative;
    margin: 0;
    font-weight: 300;
    border-bottom: 1px solid #aaa;
    text-align: center;
    font-size: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #347;
  }
  & ul {
    & > li {
      display: flex;
      align-items: center;
      padding: 0.3rem 0.25rem;
      font-size: 0.8rem;
      font-weight: 200;
      height: 2.5rem;
      cursor: pointer;
      &:hover {
        filter: brightness(120%);
      }
    }
  }
`;
// animation 回転
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;
