// ______________________________________________________
// 全てのページないにボタンを常駐させる　ボツ
import React from "react";
import { browser } from "webextension-polyfill-ts";
import styled from "styled-components";
import Character from "./Character";
import CloseButton from "./CloseButton";
import ConfigButton from "./ConfigButton";
import SendButton from "./SendButton";

// ______________________________________________________
// 
type Props = {
  className?: string;
};
export const width = 100;

// ______________________________________________________
// 
const Component: React.FC<Props> = (props) => {

  const [isDisplay, setISDisplay] = React.useState(true);
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={props.className}>
      {isDisplay ? (
        <>
          <Character onClick={() => setToggle(!toggle)} />
          <SendButton isOpen={toggle} />
          <ConfigButton isOpen={toggle} />
          <CloseButton onClose={() => setISDisplay(false)} isOpen={toggle} />
        </>
      ) : null}
    </div>
  );
};

export default styled(Component)`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 0.6rem;
`;
