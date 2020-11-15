import React from "react";
import styled from "styled-components";
import App from "~/content/components/Confirm";
import Confirm, { callbackProps } from "./MessageAPI";
import { openNewTab } from "~/utility";

type Props = {
  className?: string;
};
const Component: React.FC<Props> = ({ className }) => {
  const [display, setDisplay] = React.useState(false);
  const [confirmInfo, setConfirmInfo] = React.useState<callbackProps>({
    to: "",
    url: "",
    type: undefined,
  });

  const Callback = (result: boolean) => {
    setDisplay(false);
    if (result) {
      openNewTab(confirmInfo.url);
    }
  };
  React.useEffect(() => {
    Confirm((next) => {
      setDisplay(true);
      setConfirmInfo(next);
    });
  });

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
