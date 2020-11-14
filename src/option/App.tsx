import React from "react";
import { List, DisplayName } from "./components/Channels";
import Reset from "./components/Reset";
import NotificationConfirmation from "./components/NotificationConfirmation";
import styled from "styled-components";
type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <h1>Config</h1>
      <DisplayName />
      <List />
      <NotificationConfirmation />
      <Reset />
    </div>
  );
};

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
  min-height: 100vh;
  * {
    box-sizing: border-box;
  }
`;
