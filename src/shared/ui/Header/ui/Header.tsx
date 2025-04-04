import {
  Address,
  Column,
  HeaderWrapper,
  IconsAndButton,
  IconWrapper,
  Label,
  NumberAndAddress,
  RootStyled,
} from "./styled.ts";
import { Button } from "../../Button.tsx";

export const Header = () => {
  return (
    <RootStyled>
      <HeaderWrapper>
        <NumberAndAddress>
          <Column>
            <Label>ООО НПП «СибБурМаш»</Label>
            <Address>625031, г. Тюмень ул. Ветеранов труда, 58А</Address>
          </Column>
          <Label>+7 (3452) 47-25-86</Label>
        </NumberAndAddress>
        <IconsAndButton>
          <IconWrapper src={"/assets/like.svg"} />
          <IconWrapper src={"/assets/phone.svg"} />
          <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
        </IconsAndButton>
      </HeaderWrapper>
    </RootStyled>
  );
};
