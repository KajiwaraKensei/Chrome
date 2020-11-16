// ______________________________________________________
// 設定画面に飛ぶボタン（ボツ）
import React from "react";
import styled from "./style";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import { browser } from "webextension-polyfill-ts";

// ______________________________________________________
//
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;

  // background.js にメッセージ
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
