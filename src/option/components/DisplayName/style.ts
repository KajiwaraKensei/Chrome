// ______________________________________________________
// スタイル
import { Props } from ".";
import { FC } from "react";
import styled from "styled-components";

// ______________________________________________________
// componentのスタイル
type StyledProps = {};

export default (component: FC<Props>) => styled(component)<StyledProps>`
  border: 1px solid #fff;
  border-radius: 0.3rem;
  margin: 1rem auto;
  padding: 0.5rem;
  & > h2 {
    position: relative;
    font-size: 0.9rem;
    font-weight: 300;
    color: #eff;
    margin: 0;
  }

  & .user_name {
    position: absolute;
    top: 50%;
    left: 7.5rem;
    right: 0px;
    transform: translateY(-50%);
    font-size: 1rem;
    font-weight: 600;
    color: #eff;
  }
  & button {
    position: absolute;
    top: 50%;
    right: 0rem;
    transform: translate(-50%, -50%);
    padding: 0.2rem;
    background-color: #000;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      filter: brightness(200%);
    }
  }

  & .edit_name {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 7.5rem;
    right: 0rem;
    transform: translateY(-50%);
    width: calc(100% - 8rem);
    & > input {
      display: block;
      width: 100%;
      font-size: 1rem;
      background-color: #00000000;
      border: none;
      border-bottom: 1px solid #666;
      color: #fff;
      padding: 0.3rem;
      outline: none;
      transition: 0.2s;
      &:hover {
        border-bottom: 1px solid #999;
      }
      &:focus {
        border-bottom: 1px solid #abd;
      }
    }
  }
`;
