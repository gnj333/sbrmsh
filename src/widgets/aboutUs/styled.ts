import styled from "styled-components";
import { theme } from "../../shared/styles/theme";
import { Button } from "../../shared/ui/Button";

export const Title = styled.p`
  font-size: 25px;
  font-weight: ${theme.fontWeights.bold};
  margin-top: 40px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 300px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const AboutUsWrapper = styled.div`
  margin-top: 80px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BlocksWithNews = styled.div`
  display: flex;
  gap: 24px;
`;

export const NewsImage = styled.img``;

export const NewsWrapper = styled.div`
  position: relative;
`;

export const NewsButton = styled(Button)`
  background-color: ${theme.colors.blue};
  position: absolute;
  top: 40px;
  left: 30px;
  width: 207px;
  height: 46px;
  font-size: 28px;
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const DateAndNew = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: ${theme.colors.purewhite};
  font-size: 20px;
  position: absolute;
  left: 30px;
  bottom: 40px;
  font-weight: ${theme.fontWeights.medium};
  max-width: 323px;
  line-height: 25px;
`;
