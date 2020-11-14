// ______________________________________________________
// 共有する時に確認するか？
import React from "react";
import styled, { NotificationButton, AntSwitch } from "./style";
import {
  setNotificationConfig,
  getNotificationConfig,
} from "~/utility/notification"; // chromeAPI(主に通知)

export type Props = {};

const Component: React.FC<Props> = (props) => {
  const { } = props;
  const [notification, setNotification] = React.useState(false); // 確認のフラグ true:確認する

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotification(event.target.checked); // chrome に保存
    setNotificationConfig(event.target.checked);
  };

  const handleClick = () => {
    setNotificationConfig(!notification); // chrome に保存
    setNotification(!notification);
  };

  React.useEffect(() => {
    getNotificationConfig().then(setNotification); // フラグ取得
  });

  return (
    <div {...props}>
      <h2 onClick={handleClick}>
        共有の確認
        <NotificationButton className="notification_button">
          <AntSwitch checked={notification} onChange={handleChange} />
        </NotificationButton>
      </h2>
    </div>
  );
};

export default styled(Component);
