import {
  Address,
  Column,
  HeaderWrapper,
  IconsAndButton,
  Label,
  NumberAndAddress,
  RootStyled,
} from "./styled.ts";
import { Button } from "../../Button.tsx";
import Like from "../../../assets/like.svg?react";
import Phone from "../../../assets/phone.svg?react";

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
          <Like />
          <Phone />
          <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
        </IconsAndButton>
      </HeaderWrapper>
    </RootStyled>
  );
};
