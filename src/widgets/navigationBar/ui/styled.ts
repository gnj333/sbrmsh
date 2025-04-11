import styled from "styled-components";
import { theme } from "../../../shared/styles/theme.ts";

export const NavBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background-color: ${theme.colors.purewhite};
  padding: 30px;
  margin: 30px 24px 24px;
  background-color: ${theme.colors.gray300};
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.07);
  position: sticky;
  z-index: 10;
  top: 30px;
  width: 355px;
  height: fit-content;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 54px 150px 0 54px;
  gap: 45px;
  width: 100%;
`;

export const LinkStyled = styled.p<{ $isActive?: boolean }>(
  ({ $isActive }) => ({
    fontSize: theme.fontSizes[20],
    fontWeight: $isActive ? theme.fontWeights.bold : theme.fontWeights.medium,
    height: "20px",
    width: "100%",
    color: $isActive ? theme.colors.blue : theme.colors.black,
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: $isActive ? "" : "scale(1.1)",
    },
    whiteSpace: "nowrap",
  }),
);
