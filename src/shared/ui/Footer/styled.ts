import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterWrapper = styled.div`
  display: flex;
  padding: 58px 0 58px 0;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 355px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: ${theme.colors.blue800};
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: ${theme.colors.black};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: ${theme.fontWeights.bold};
`;

export const ParagraphsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 55px;
`;

export const Link = styled(Paragraph)`
  text-decoration: underline;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  background-color: ${theme.colors.gray300};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.7s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${theme.colors.blue800};
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  right: 0;
  top: 50%;
`;

export const Warning = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.gray300};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;
