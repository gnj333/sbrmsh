import styled from "styled-components";
import { theme } from "../styles/theme.ts";

export const Button = styled.button`
    background-color: ${theme.colors.black};
    width: 231px;
    height: 60px;
    color: ${theme.colors.purewhite};
    cursor: pointer;
    border-radius: ${theme.borderRadius};
    border: none;
    transition: background-color 0.7s ease, transform 0.3s ease;

    &:hover {
        background-color: ${theme.colors.blue};
    }

,`;
