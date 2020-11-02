import React from "react";
import { browser } from "webextension-polyfill-ts";
import styled, { css } from "styled-components";
import Character from "./Character";
import CloseButton from "./CloseButton";
import ConfigButton from "./ConfigButton";
import SendButton from "./SendButton";
type Props = {
  className?: string;
};
export const width = 2;

const Component: React.FC<Props> = (props) => {
  const handleEvent = () => {
    const port = browser.runtime.connect();
    port.postMessage({ type: "create", path: location.href });
    port.onMessage.addListener(function (response) {
      console.log("receive");
      const data = response.data;
      console.log(data);
    });
  };
  return (
    <div className={props.className} onClick={handleEvent}>
      <Character />
      <SendButton />
      <ConfigButton />
      <CloseButton />
    </div>
  );
};

export default styled(Component)`
  position: relative;
`;
