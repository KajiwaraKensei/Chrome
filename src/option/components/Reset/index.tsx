import React from "react";
import styled, { ResetButton } from "./style";
import { resetStorage, pageReload } from "~/utility";
import ResetIcon from "@material-ui/icons/RotateLeft";
export type Props = {};

const Component: React.FC<Props> = (props) => {
  const {} = props;
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

  return (
    <div {...props}>
      <h2 onClick={doReset}>
        データリセット
        <ResetButton className="reset_icon" loading={loading.toString()}>
          <ResetIcon
            className="reset_svg"
            style={{ fontSize: 15, color: "#fff" }}
          />
        </ResetButton>
      </h2>
      {loading && <div>クリア中...</div>}
    </div>
  );
};

export default styled(Component);
