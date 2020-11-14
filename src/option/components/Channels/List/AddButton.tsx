// ______________________________________________________
// 追加Component
import React from "react";
import { checkChannelID } from "~/utility/channel";
import { addStyled } from "./style";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export type Props = {
  className?: string;
  onSubmit?: (channelID: string) => void; // submit時にコールバック
};

const Component: React.FC<Props> = (props) => {
  const { className, onSubmit } = props;
  const [toggle, setToggle] = React.useState(false); // 編集モードか？
  const [channelID, setChannelID] = React.useState(""); // 追加チャンネル名
  const [error, setError] = React.useState<false | string>(false); // エラーメッセージ

  // onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChannelID(event.target.value);
  };

  // 編集モード切り替え
  const handleClick = (toggle: boolean) => () => {
    setToggle(toggle);
  };

  // 追加処理
  const addSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await checkChannelID(channelID); //入力チェック
    setError(result);

    // エラーメッセージがない場合
    !result && onSubmit && onSubmit(channelID);
    !result && setToggle(false);
    !result && setChannelID("");
  };

  const addComponent = (
    <form onSubmit={addSubmit}>
      <input type="text" onChange={handleChange} value={channelID} autoFocus />
      <button onClick={addSubmit}>
        <PlaylistAddCheckIcon fontSize="small" color="inherit" />
      </button>
    </form>
  );

  return (
    <div className={className}>
      {toggle && error && <div>{error}</div>}
      {toggle && addComponent}

      {!toggle && (
        <button onClick={handleClick(true)}>
          <PlaylistAddIcon fontSize="small" color="inherit" />
        </button>
      )}
    </div>
  );
};

export default addStyled(Component);
