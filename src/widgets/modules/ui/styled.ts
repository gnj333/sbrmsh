import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const ModulesBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 53px;
  margin-top: 144px;
  text-align: center;
  padding: 50px;
`;

export const Title = styled.p`
  font-size: 48px;
  color: ${theme.colors.black};
`;

export const ModulesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ModuleWrapper = styled.div`
  background-color: ${theme.colors.gray300};
  border-radius: 30px;
  padding: 20px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  position: relative;
  width: 300px;
`;

export const Image = styled.img`
  width: 103px;
  height: 290px;
`;

export const ModuleTitle = styled.p<{ count: number }>`
  font-size: ${({ count }) => (count > 15 ? "20px" : "30px")};
  min-height: 60px;
  word-wrap: break-word;
  text-align: start;
`;
