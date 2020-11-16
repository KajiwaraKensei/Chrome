// ______________________________________________________
// 通知
import React from "react";
import styled from "./style";
import Bird from "./SVG/bird";
import SnowMan from "./SVG/SnowMan";
import Blooming from "./SVG/Blooming";
import Switch from "@material-ui/core/Switch";
import {
  setNotificationConfig,
  getNotificationConfig,
} from "~/utility/notification"; // chromeAPI(主に通知)

// ______________________________________________________
// 
export type ConfirmType = "snow" | "bird" | "blooming";
export type Props = {
  className?: string;
  to: string;
  url: string;
  type?: ConfirmType;
  onChange?: (result: boolean) => void;
};

// ______________________________________________________
// 
const Component: React.FC<Props> = (props) => {
  const { className, url, to, type, onChange } = props;
  const [notification, setNotification] = React.useState(false); // 通知を受け取るかの設定フラグ

  React.useEffect(() => {
    getNotificationConfig().then(setNotification); // 通知の設定取得
  }, []);

  // チェックボックスを押した時
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotification(event.target.checked); // react
    setNotificationConfig(event.target.checked); // chrome
  };

  // 結果を返す
  const handleClick = (result: boolean) => () => {
    onChange && onChange(result);
  };
  return (
    <div className={className}>
      <div className="head_loco">{url}</div>
      <div className="body_loco">
        {(type === "bird" || type === undefined) && <Bird />}
        {type === "snow" && <SnowMan />}
        <div>
          <p>
            <span className="name_loco">{to}</span>
            がページを共有しています。開きますか？
          </p>
          <p className="notification_loco">
            <label htmlFor="notification">通知で毎回確認する</label>
            <Switch
              id="notification"
              size="small"
              checked={!notification}
              onChange={handleChange}
              color="primary"
            />
          </p>
        </div>

        {type === "blooming" && <Blooming />}
      </div>

      <div className="footer_loco">
        <button className="no_loco" onClick={handleClick(false)}>
          cancel
        </button>
        <button className="yes_loco" onClick={handleClick(true)}>
          Open
        </button>
      </div>
    </div>
  );
};

export default styled(Component);
