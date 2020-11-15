import React from "react";
import styled from "./style";
import { sendMessage } from "~/utility/CloudFunctions";
import { getSelectChannel } from "~/utility/channel";
type Props = {
  className?: string;
};
export const width = 3;

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    getSelectChannel()
      .then((id) => sendMessage(id, location.href))
      .then((tokens) => {})
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div onClick={handleClick} className={className}>
      send
    </div>
  );
};

export default styled(Component);
