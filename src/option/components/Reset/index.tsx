import React from "react";
import styled from "./style";
import { resetStorage, pageReload } from "~/utility";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(false);
  const doReset = () => {
    setLoading(true);
    resetStorage()
      .then((result) => {
        console.log(result ? "クリアしました" : "error");
      })
      .finally(() => {
        setLoading(false);
        pageReload();
      });
  };
  const { className } = props;
  return (
    <div className={className}>
      <h2>データリセット</h2>
      {loading && "クリア中..."}
      <button onClick={doReset}>do reset</button>
    </div>
  );
};

export default styled(Component);
