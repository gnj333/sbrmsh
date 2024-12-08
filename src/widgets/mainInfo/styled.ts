import styled from "styled-components";
import {theme} from "../../shared/styles/theme.ts";


export const MainInfoWrapper = styled.div``

export const ControllersPicture = styled.img`
    width: 96px;
    height: 267px;`

export const ControllersPictureWrapper = styled.div`
display: flex;
flex-direction: row;`

export const ControllersWrapper = styled.div`
    padding-top: 207px;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 100px`

export const ControllersTextWrapper = styled.div`
max-width: 450px`

export const ControllersText = styled.p`
font-size: 22px;`

export const Title = styled.p`
font-size: 48px;
font-weight: ${theme.fontWeights.bold};
padding: 40px 0 0 0;
color: ${theme.colors.black200};`

export const MoreButton = styled.button`
background-color: ${theme.colors.black};
padding: 16px 71px;
color: ${theme.colors.purewhite};
    cursor: pointer;
    border-radius: 15px;
position: absolute;
right: 0;
bottom: 0;
    border: none;
    transition: background-color 0.7s ease, transform 0.3s ease;
&:hover {
   background-color: blue;
},`

export const TitleAndButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative`
