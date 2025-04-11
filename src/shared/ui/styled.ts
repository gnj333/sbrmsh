import styled from "styled-components";
import { theme } from "../styles/theme";

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes["16"]};
  font-weight: 500;
  color: ${theme.colors.purewhite};
  padding: 10px 28px;
  background: ${theme.colors.blue800};
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
`;
