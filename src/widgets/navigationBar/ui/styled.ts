import styled from "styled-components";
import {theme} from "../../../shared/styles/theme.ts";


export const NavBarWrapper = styled.div`
display: flex;
flex-direction: column;
width: 355px;
align-items: center;
height: 100%`

export const LogoWrapper = styled.img`
width: 198px;
height: 62px;`

export const MenuWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 54px 150px 0 54px;
gap: 45px`

export const LinkStyled = styled.p<{ $isActive?: boolean }>(({ $isActive }) => ({
    fontSize: theme.fontSizes[16],
    fontWeight: $isActive ? theme.fontWeights.bold : theme.fontWeights.medium,
    height: '30px',
    width: '150px',
    color: $isActive ? 'blue' : theme.colors.black,
    cursor: 'pointer',
    '&:hover': {
        fontWeight: theme.fontWeights.bold,
    },
}));