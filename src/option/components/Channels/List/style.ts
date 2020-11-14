// ______________________________________________________
// スタイル
import { FC } from "react";
import styled, { css } from "styled-components";
import { Props } from ".";

// ______________________________________________________
// default
type StyledProps = {};

export default (component: FC<Props>) => styled(component)<StyledProps>`
  color: #fff;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 0.3rem;
  margin: 1rem auto;
  position: relative;

  & > div {
    display: flex;
    width: 100%;
  }
  & h2 {
    flex: 0 0 7.5rem;
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0rem;
    pointer-events: none;
  }

  .channel_list {
    flex: 1 1 auto;
    & input {
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
  & ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    & > li {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
      background-color: #fff;
      color: #000;
      cursor: pointer;
      padding: 0.3rem 1rem;
      margin: 0.4rem auto;
      border-radius: 0.75rem;
      &:hover {
        color: #fff;
        background-color: #223;
        & > .delete_button {
          opacity: 1;
        }
      }
      & > .delete_button {
        position: absolute;
        cursor: pointer;
        top: 50%;
        right: 0;
        transform: translate(0%, -50%);
        opacity: 0;
      }
    }
    .select {
      color: #000;
      background-color: #abd;
      &:hover {
        color: #fff;
        background-color: #223;

        filter: brightness(150%);
      }

      & > span {
        padding-right: 1rem;
      }
    }
  }
`;

// ______________________________________________________
// deleteスタイル
import { Props as DeleteProps } from "./DeleteButton";
type DeleteStyledProps = {};

export const deleteStyled = (component: FC<DeleteProps>) =>
  styled(component)<DeleteStyledProps>`
    ${addStyle}
    &:hover {
      background-color: #ffffff33;
      color: #abd;
    }
  `;

// ______________________________________________________
// 追加ボタンのスタイル
import { Props as AddProps } from "./AddButton";
type AddPropsProps = {};

export const addStyled = (component: FC<AddProps>) =>
  styled(component)<AddPropsProps>`
    margin-top: 0.5rem;
    & > button {
      ${addStyle}
      margin-left: auto;
    }
    & > form {
      position: relative;

      & > button {
        position: absolute;
        right: 0;
        top: 53%;
        transform: translateY(-50%);
        ${addStyle}
      }
    }

    button:hover {
      background-color: #ffffff33;
      color: #abd;
    }
  `;

// 共通ボタンのスタイル
const addStyle = css`
  cursor: pointer;
  color: #fff;
  background-color: inherit;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
