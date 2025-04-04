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
  padding: 30px 50px 30px 50px;
  background-color: white;
`;

export const NumberAndAddress = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const IconsAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 47px;
  flex-wrap: wrap;
  align-items: center;
`;

export const IconWrapper = styled.img`
  cursor: pointer;
  width: 28px;
  height: 28px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(749%)
      hue-rotate(195deg);
  }
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: ${theme.fontWeights.bold};
`;

export const Address = styled.p`
  font-size: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 8px;
`;
