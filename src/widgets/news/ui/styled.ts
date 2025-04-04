import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const CompanyNews = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: left bottom;
  border-radius: 30px;
  background-image:
    linear-gradient(to bottom, #2669d799, #2669d799), url("/assets/photo.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyNewsWrapper = styled.div`
  background: linear-gradient(to bottom, #2669d799);
`;

export const Title = styled.h1`
  font-size: 60px;
  color: ${theme.colors.purewhite};
`;

export const NewsItemsWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 55px;
`;
