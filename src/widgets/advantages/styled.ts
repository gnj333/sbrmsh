import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const AdvantagesWrapper = styled.div`
  display: flex;
  padding: 50px 57px 50px 57px;
  gap: 16px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.blue800};
  margin-top: 50px;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 48px;
  color: ${theme.colors.purewhite};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const TextTitle = styled.p`
  font-size: 36px;
`;

export const TextWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${theme.colors.purewhite};
  max-width: 310px;
`;

export const Image = styled.img`
  width: 82px;
  height: 82px;
`;

export const BlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  width: 100%;
  justify-content: space-between;
`;

export const Box = styled.div`
  border-left: 1px solid ${theme.colors.purewhite};
  border-right: 1px solid ${theme.colors.purewhite};
  padding: 0 80px 0 80px;
`;
