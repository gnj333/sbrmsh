import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const NewsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 419px;
  border: 2px solid black;
  padding-bottom: 40px;
  border-radius: 32px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 100%;

  &:hover {
    border: 2px solid blue;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes["20"]};
  font-weight: 500;
  color: black;
  margin-left: 20px;
  margin-top: 20px;
`;

export const DateWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;
