import React from "react";
import styled from "./style";
import { checkLogin } from "~/content/util";
export type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};
export const width = 3;

const Component: React.FC<Props> = (props) => {
  const { className, onClick } = props;
  const [isLogin, setLogin] = React.useState<null | boolean>(null);
  React.useEffect(() => {
    checkLogin().then(setLogin);
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event);
  };
  return (
    <div onClick={handleClick} className={className}>
      {isLogin !== null && isLogin ? "yes" : "no"}
    </div>
  );
};

export default styled(Component);
