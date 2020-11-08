import { FC } from "react";
import styled from "styled-components";

// ______________________________________________________
//
import { Props } from ".";
type StyledProps = {};

export default (component: FC<Props>) => styled(component)<StyledProps>``;

// ______________________________________________________
//
import { Props as DeleteProps } from "./DeleteButton";
type DeleteStyledProps = {};

export const deleteStyled = (component: FC<DeleteProps>) =>
  styled(component)<DeleteStyledProps>``;

// ______________________________________________________
//
import { Props as AddProps } from "./AddButton";
type AddPropsProps = {};

export const addStyled = (component: FC<AddProps>) =>
  styled(component)<AddPropsProps>``;
