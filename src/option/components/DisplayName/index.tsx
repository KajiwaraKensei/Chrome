import React from "react";
import { getUsername, updateUsername } from "~/option/util";
import styled from "./style";
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

  const handleSave = () => {
    updateUsername(userName)
      .then(() => {
        setOriginName(userName);
      })
      .finally(() => {
        setToggle(false);
      });
  };
  const EditComponent = (
    <div>
      <input type="text" value={userName} onChange={handleChangeName} />
      {originName !== userName && <button onClick={handleSave}>save</button>}
    </div>
  );
  const NoEditComponent = (
    <>
      {originName}
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        edit
      </button>
    </>
  );
  return (
    <div className={className}>
      <h2>ユーザー名: {toggle ? EditComponent : NoEditComponent}</h2>
    </div>
  );
};

export default styled(Component);
