import React from "react";
import styled from "./style";
import { getUsername } from "~/utility";

export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;

  const [userName, setUserName] = React.useState(""); // ユーザー名

  React.useEffect(() => {
    // ユーザー名取得
    getUsername().then((username) => {
      setUserName(username);
    });
  }, []);

  return <li className={className}>user_name: {userName}</li>;
};

export default styled(Component);
