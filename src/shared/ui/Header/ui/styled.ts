import styled from "styled-components";
import { theme } from "../../../styles/theme.ts";

export const RootStyled = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    width: 100%;

    &:after {
        top: 0;
        width: 100%;
        height: 142px;
        left: -5px;
        content: '';
        position: absolute;
        z-index: -1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 30px 50px;
  background-color: ${theme.colors.gray300};
  border-radius: 24px;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.07);
  margin-top: 30px;
`;

export const IconsAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 47px;
  flex-wrap: wrap;
  align-items: center;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0) saturate(100%) invert(38%) sepia(98%) saturate(749%)
      hue-rotate(202deg) brightness(98%) contrast(300%);
  }
`;

export const Label = styled.p`
  font-size: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
