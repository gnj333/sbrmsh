import {
  LinkStyled,
  MenuWrapper,
  NavBarStyled,
  NavBarWrapper,
} from "./styled.ts";
import { $menuItems, $routesOpenState } from "../model.ts";
import { useUnit } from "effector-react";
import { Link } from "../../../shared/ui/Link";
import { mainPageRoute } from "../../../shared/routes";
import Logo from "../../../shared/assets/logo.svg?react";

export const NavBar = () => {
  const routesOpenState = useUnit($routesOpenState);
  const menuItems = useUnit($menuItems);

  return (
    <NavBarWrapper>
      <NavBarStyled>
        <Link to={mainPageRoute}>
          <Logo />
        </Link>
        <MenuWrapper>
          {menuItems.length &&
            menuItems.map((el) => (
              <Link to={el.to} key={el.name}>
                <LinkStyled $isActive={routesOpenState[el.title]}>
                  {el.name}
                </LinkStyled>
              </Link>
            ))}
        </MenuWrapper>
      </NavBarStyled>
    </NavBarWrapper>
  );
};
