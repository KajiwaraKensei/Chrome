// ______________________________________________________
// スタイル
import { Props } from ".";
import { FC } from "react";
import styled from "styled-components";

// ______________________________________________________
// デフォルト
type StyledProps = {};
export default (component: FC<Props>) => styled(component)<StyledProps>``;
