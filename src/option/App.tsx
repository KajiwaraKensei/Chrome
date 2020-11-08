import React from "react";
import { List, DisplayName } from "~/option/components/Channels";

type Props = {};

const Component: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>設定</h1>
      <DisplayName />
      <List />
    </div>
  );
};

export default Component;
