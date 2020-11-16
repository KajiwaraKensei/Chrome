// ______________________________________________________
// 設定
import React from "react";
import { List, DisplayName } from "./components/Channels";
import Reset from "./components/Reset";
import NotificationConfirmation from "./components/NotificationConfirmation";
import styled from "styled-components";

// ______________________________________________________
//
type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <DisplayName />
      <List />
      <NotificationConfirmation />
      <Reset />
    </div>
  );
};

// ______________________________________________________
//
export default styled(Component)`
  max-width: 40rem;
  margin: 0 auto;
  padding: 0.25rem;
  & > h1 {
    color: #eef;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }
  background-color: #000;
  * {
    box-sizing: border-box;
  }
`;
