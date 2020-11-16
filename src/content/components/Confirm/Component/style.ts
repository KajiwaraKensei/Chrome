import { Props } from ".";
import { FC } from "react";
import styled, { css } from "styled-components";

type StyledProps = {};
export default (component: FC<Props>) => styled(component)<StyledProps>`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 30rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 10px 2px #000;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;

  .head_loco {
    flex: 1 0 1rem;
    font-weight: 350;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem 0.5rem;
    color: #334;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: anywhere;
  }
  .body_loco {
    padding: 0.25rem 0.5rem;
    flex: 1 1 auto;
    font-weight: 300;
    font-size: 0.85rem;
    color: #555;
    p {
      margin: 0;
    }
    .name_loco {
      font-weight: 500;
      padding-right: 0.25rem;
      font-size: 1.1em;
      color: #67f;
    }
    .notification_loco {
      font-size: 0.7rem;
      color: #555;
      label {
        cursor: pointer;
        &:hover {
          filter: brightness(120%);
        }
      }
    }
  }
  .footer_loco {
    flex: 0 0 2rem;
    display: flex;
    justify-content: flex-end;
    & > button {
      background-color: inherit;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
      margin: 0 0rem 0 0.25rem;
      outline: none;
      width: 4rem;
      font-size: 0.9rem;
      cursor: pointer;
      &:hover {
        background-color: #67e;
        color: #fff;
        border-color: #fff;
      }
    }

    & > .yes_loco {
      background-color: #67f;
      color: #fff;
      &:hover {
        background-color: #78f;
        color: #fff;
        border-color: #fff;
      }
    }
    & > .no_loco {
      &:hover {
        background-color: #fff;
        color: #000;
        border-color: #ccc;
      }
    }
  }
  ${(props) => {
    switch (props.type) {
      case "snow":
        return snow_man;
      case "blooming":
        return blooming;
      default:
        return bird;
    }
  }}
`;

const bird = css`
  .body_loco {
    display: flex;
    & > div {
      padding: 0.5rem;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .notification_loco {
    }
  }
`;
const snow_man = css`
  .body_loco {
    .name_loco {
      color: #f50057;
    }
    p {
      margin: 0.25rem 0;
    }
    padding-bottom: 0.25rem;
    text-align: center;
    svg {
      margin: 0.5rem auto 0;
    }
  }
  .footer_loco {
    justify-content: center;
    padding: 0.25rem;
    & > button {
      margin: 0 0.25rem;
    }
    & > .yes_loco {
      background-color: #f50057;
      &:hover {
        background-color: #ff0057;
      }
    }
  }
`;

const blooming = css`
  background-color: #111;
  border: 1px solid #aaa;
  .head_loco {
    color: #ddd;
    border-color: #aaa;
  }
  .body_loco {
    display: flex;
    color: #ddd;
    & > div {
      padding: 0.5rem;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .notification_loco {
      color: #ccc;
      .MuiSwitch-track {
        background-color: #666;
      }
    }
  }
  .footer_loco {
    .yes_loco {
      border-color: #555;
      &:hover {
        border-color: #111;
        background-color: #78f;
      }
    }
    .no_loco {
      background-color: #eee;
      color: #222;
      &:hover {
        background-color: #fff;
      }
    }
  }
`;
