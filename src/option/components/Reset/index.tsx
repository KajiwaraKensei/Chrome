// ______________________________________________________
// リセットボタン
import React from "react";
import styled, { ResetButton } from "./style";
import { resetStorage, pageReload } from "~/utility"; // chromeAPI, cloudFunctions
import ResetIcon from "@material-ui/icons/RotateLeft"; // SVGアイコン

export type Props = {};

const Component: React.FC<Props> = (props) => {
  const {} = props;
  const [loading, setLoading] = React.useState(false); // true: ロード中

  // リセット処理
  const doReset = () => {
    setLoading(true); // ロード開始
    resetStorage()
      .then((result) => {
        console.log(result ? "クリアしました" : "error");
      })
      .finally(() => {
        setLoading(false); // ロード終了
        pageReload(); // ページリロード
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
