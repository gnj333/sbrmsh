import styled from "styled-components";
import {theme} from "../../shared/styles/theme.ts";


export const MainInfoWrapper = styled.div``

export const ControllersPicture = styled.img`
    width: 96px;
    height: 267px;`

export const ControllersPictureWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 16px`

export const ControllersWrapper = styled.div`
    padding-top: 120px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 100px`

export const Title = styled.p`
font-size: 48px;
font-weight: ${theme.fontWeights.bold};
padding: 40px 0 0 0;
color: ${theme.colors.black200};`

export const TitleAndButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative`

export const ButtonWrapper = styled.div`
position: absolute;
right: 0;
bottom: 0`
