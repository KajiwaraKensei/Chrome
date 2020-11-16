// ______________________________________________________
// ボツ
import React from "react";
import styled, { Bit } from "./style";
import UFO from "./UFO";
export type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};
export const width = 3;

const Component: React.FC<Props> = (props) => {
  const { className, onClick } = props;
  const [isLogin, setLogin] = React.useState<null | boolean>(null);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const position = React.useMemo(() => {
    return {
      x: (cursor.x / windowSize.width) * 100,
      y: (cursor.y / windowSize.height) * 100,
    };
  }, [cursor, windowSize]);
  React.useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", (e) => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
    document.addEventListener("mousemove", (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event);
  };

  return (
    <div onClick={handleClick} className={className}>
      <div>
        <Bit x={position.x} y={position.y}>
          <UFO />
        </Bit>
      </div>
    </div>
  );
};

export default styled(Component);
