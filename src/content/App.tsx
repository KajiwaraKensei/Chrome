// ______________________________________________________
// ページないに表示するよう
import React from "react";
import styled from "styled-components";
import App from "~/content/components/Confirm";
import Confirm, { callbackProps } from "./MessageAPI";
import { checkLogin, openNewTab } from "~/utility";

// ______________________________________________________
// Component
type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  const [display, setDisplay] = React.useState(false); // Confirmを表示するか？
  const [confirmInfo, setConfirmInfo] = React.useState<callbackProps>({
    to: "",
    url: "",
    type: undefined,
  });

  // メッセージを受け取った時の処理
  const Callback = (result: boolean) => {
    setDisplay(false);
    if (result) {
      openNewTab(confirmInfo.url); // 新規タブで開く
    }
  };


  React.useEffect(() => {
    // ログインの確認
    checkLogin();

    // background.jsからのメッセージを受け取れるようにする
    Confirm((next) => {
      setDisplay(true);
      setConfirmInfo(next);
    });
  }, []);

  return (
    <div className={className}>
      {display && <App {...confirmInfo} onChange={Callback} />}
    </div>
  );
};
export default styled(Component)`
  & > * {
    box-sizing: border-box;
  }
`;
