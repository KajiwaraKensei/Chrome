// ______________________________________________________
// popupで表示
import React from "react";
import styled from "styled-components";
import { Channels } from "./components"; // 登録しているチャンネルの表示
// ______________________________________________________
//
type Props = {};

const Component: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      <ul>
        <Channels />
      </ul>
    </div>
  );
};

// ______________________________________________________
//
export default styled(Component)`
  width: 10rem;
  color: #eee;
  background-color: #111;
  border-radius: 0 0 0.5rem 0.5rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #aaa;
  }
  * {
    box-sizing: border-box;
  }
`;
