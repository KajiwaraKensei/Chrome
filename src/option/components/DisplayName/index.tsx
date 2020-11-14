// ______________________________________________________
// ユーザー名変更
import React from "react";
import { updateUsername, getUsername } from "~/utility";
import styled from "./style";
import EditIcon from "@material-ui/icons/Edit"; // SVGアイコン
import SaveAltIcon from "@material-ui/icons/SaveAlt"; // SVGアイコン

export type Props = {
};

const Component: React.FC<Props> = (props) => {
  const [userName, setUserName] = React.useState(""); // ユーザー名
  const [originName, setOriginName] = React.useState(""); // 変更前のユーザー名
  const [toggle, setToggle] = React.useState(false); // 変更モードフラグ true: 変更モード

  React.useEffect(() => {
    // ユーザー名取得
    getUsername().then((username) => {
      setUserName(username);
      setOriginName(username);
    });
  }, []);

  // onChangeイベント
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  // 保存処理
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUsername(userName)
      .then(() => {
        setOriginName(userName);
      })
      .finally(() => {
        setToggle(false);
      });
  };

  // 変更時Component
  const EditComponent = (
    <form onSubmit={handleSave} className="edit_name">
      <input
        type="text"
        value={userName}
        onChange={handleChangeName}
        autoFocus
      />
      {originName !== userName && (
        <button onClick={handleSave}>
          <SaveAltIcon style={{ fontSize: 16, color: "#fff", padding: 0 }} />
        </button>
      )}
    </form>
  );

  // 表示のみ
  const NoEditComponent = (
    <span className="user_name">
      {originName}
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        <EditIcon style={{ fontSize: 15, color: "#ddf" }} />
      </button>
    </span>
  );

  return (
    <div {...props}>
      <h2>ユーザー名 {toggle ? EditComponent : NoEditComponent}</h2>
    </div>
  );
};

export default styled(Component);
