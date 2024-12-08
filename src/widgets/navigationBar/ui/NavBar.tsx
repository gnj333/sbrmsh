import {LinkStyled, LogoWrapper, MenuWrapper, NavBarWrapper} from "./styled.ts";
import {$menuItems, $routesOpenState} from "../model.ts";
import {useUnit} from "effector-react";

export const NavBar = () => {
    const routesOpenState = useUnit($routesOpenState)
    const menuItems = useUnit($menuItems)
    return (
        <NavBarWrapper>
            <LogoWrapper src={'assets/logo.svg'}/>
            <MenuWrapper>
                {menuItems.map((el) => (
                    <LinkStyled key={el.name} $isActive={routesOpenState[el.title]}>
                        {el.name}
                    </LinkStyled>
                ))}
            </MenuWrapper>
        </NavBarWrapper>
    );
}