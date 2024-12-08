import {ButtonStyle, HeaderWrapper, IconWrapper} from "./styled.ts";

export const Header = () => {
    return (
        <HeaderWrapper>
            <IconWrapper src={'assets/like.svg'} />
            <IconWrapper src={'assets/phone.svg'} />
            <ButtonStyle>ЗАКАЗАТЬ ЗВОНОК</ButtonStyle>
        </HeaderWrapper>
    )
};
