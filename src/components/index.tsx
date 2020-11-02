import React from "react";
import { browser } from "webextension-polyfill-ts";
import styled from "styled-components";
import Character from "./Character";
import CloseButton from "./CloseButton";
import ConfigButton from "./ConfigButton";
import SendButton from "./SendButton";
type Props = {
  className?: string;
};
export const width = 100;

const Component: React.FC<Props> = (props) => {
  const port = browser.runtime.connect();
  const handleEvent = () => {
    port.postMessage({ type: "create", path: location.href });
    port.onMessage.addListener(function (response) {
      const data = response.data;
      console.log(data);
    });
  };
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className={props.className} onClick={handleEvent}>
      <Character onClick={() => setToggle(!toggle)} />
      <SendButton isOpen={toggle} />
      <ConfigButton isOpen={toggle} />
      <CloseButton isOpen={toggle} />
    </div>
  );
};

export default styled(Component)`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 0.6rem;
`;
