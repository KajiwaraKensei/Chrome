import React from "react";
import { addChannel, checkChannelID } from "~/option/util";
import { addStyled } from "./style";
export type Props = {
  className?: string;
  onChange?: (nextChannels: string[]) => void;
};

const Component: React.FC<Props> = (props) => {
  const { className, onChange } = props;
  const [toggle, setToggle] = React.useState(false);
  const [channelID, setChannelID] = React.useState("");
  const [error, setError] = React.useState<false | string>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChannelID(event.target.value);
  };

  const handleClick = (toggle: boolean) => () => {
    setToggle(toggle);
  };
  const addSubmit = async () => {
    const result = await checkChannelID(channelID);
    setError(result);
    if (result) return;
    addChannel(channelID).then((channels) => {
      onChange && onChange(channels);
    });
  };
  const addComponent = (
    <div>
      {error && <div>{error}</div>}
      <input type="text" onChange={handleChange} value={channelID} autoFocus />
      <button onClick={addSubmit}>add</button>
    </div>
  );
  return (
    <div className={className}>
      {toggle && addComponent}
      {toggle || <button onClick={handleClick(true)}>add</button>}
    </div>
  );
};

export default addStyled(Component);
