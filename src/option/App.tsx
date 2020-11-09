import React from "react";
import { List, DisplayName } from "~/option/components/Channels";
import Reset from "~/option/components/Reset";

type Props = {};

const Component: React.FC<Props> = (props) => {
  return (
    <>
      <h1>設定</h1>
      <DisplayName />
      <List />
      <Reset />
    </>
  );
};

export default Component;
