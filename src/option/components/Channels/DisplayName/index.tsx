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
    updateUsername(userName).then(() => {
      setOriginName(userName);
    });
  };
  return (
    <div className={className}>
      <h2>ユーザー名: {originName}</h2>
      <input type="text" value={userName} onChange={handleChangeName} />
      {originName !== userName && <button onClick={handleSave}>save</button>}
    </div>
  );
};

export default styled(Component);
