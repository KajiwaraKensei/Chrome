import React from "react";
import { updateUsername, getUsername } from "~/utility";
import styled from "./style";
import EditIcon from "@material-ui/icons/Edit";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
export type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const [userName, setUserName] = React.useState("");
  const [originName, setOriginName] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  React.useEffect(() => {
    getUsername().then((username) => {
      setUserName(username);
      setOriginName(username);
    });
  }, []);
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

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
    <div className={className}>
      <h2>ユーザー名 {toggle ? EditComponent : NoEditComponent}</h2>
    </div>
  );
};

export default styled(Component);
