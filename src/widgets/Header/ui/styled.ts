import styled from 'styled-components'
import {theme} from "../../../shared/styles/theme.ts";


export const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: end;
gap: 47px;
flex-wrap: wrap`

export const ButtonStyle = styled.button`
border: none;
border-radius: 15px;
background-color: ${theme.colors.black};
padding: 25px 40px;
color: ${theme.colors.purewhite};
font-size: ${theme.fontSizes["16"]};
cursor: pointer;`

export const IconWrapper = styled.img`
cursor: pointer;`;