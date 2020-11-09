import { Props } from ".";
import { FC } from "react";
import styled from "styled-components";
type StyledProps = {};
export default (component: FC<Props>) => styled(component)<StyledProps>``;
