import React from "react";
import styled, { NotificationButton, AntSwitch } from "./style";
import {
  setNotificationConfig,
  getNotificationConfig,
} from "~/utility/notification";
export type Props = {};

const Component: React.FC<Props> = (props) => {
  const {} = props;
  const [notification, setNotification] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotification(event.target.checked);
    setNotificationConfig(event.target.checked);
  };

  const handleClick = () => {
    setNotificationConfig(!notification);
    setNotification(!notification);
  };

  React.useEffect(() => {
    getNotificationConfig().then(setNotification);
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
