import styled from "styled-components";
import { theme } from "../../shared/styles/theme.ts";

export const MainInfoWrapper = styled.div`
  margin-top: 23px;
`;

export const ControllersPicture = styled.img`
  width: 96px;
  height: 267px;
`;

export const ControllersPictureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ControllersWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
`;

export const GrayWrapper = styled.div`
  background-color: #ebf0f0b2;
  border-radius: 32px;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: ${theme.fontWeights.bold};
  padding: 40px 0 0 0;
  color: ${theme.colors.black200};
`;

export const TitleAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 50px 50px 50px 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: end;
`;
