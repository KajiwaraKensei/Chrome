// ______________________________________________________
//スタイル
import { Props } from ".";
import { FC } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

// ______________________________________________________
// componentのスタイル
type StyledProps = {};

export default (component: FC<Props>) => styled(component)<StyledProps>`
  color: #fff;
  & > h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 300;
    font-size: 0.9rem;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 0.3rem;
    padding: 0.5rem;
    &:hover {
      border: 1px solid #abd;
    }
  }
`;

// ______________________________________________________
// toggle_button
type NotificationProps = {};

export const NotificationButton = styled.div<NotificationProps>`
  margin-left: 0rem;
  display: block;
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// ______________________________________________________
//
export const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);
