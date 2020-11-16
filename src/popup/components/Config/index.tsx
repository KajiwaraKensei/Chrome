import React from "react";
import styled from "./style";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import { browser } from "webextension-polyfill-ts";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const handleClick = () => {
    browser.runtime.sendMessage({ type: "newConfig" });
  };
  return (
    <li className={className} onClick={handleClick}>
      設定 <LaunchRoundedIcon fontSize="small" />
    </li>
  );
};

export default styled(Component);
