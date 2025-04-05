import {
  Column,
  HeaderWrapper,
  IconsAndButton,
  IconWrapper,
  Label,
  RootStyled,
} from "./styled.ts";
import { Button } from "../../Button.tsx";
import Like from "../../../assets/like.svg?react";
import Phone from "../../../assets/phone.svg?react";

export const Header = () => {
  return (
    <RootStyled>
      <HeaderWrapper>
        <Column>
          <Label>9:00 - 18:00</Label>
          <Label>г. Тюмень ул. Ветеранов труда, 58А</Label>
        </Column>
        <IconsAndButton>
          <IconWrapper>
            <Like />
          </IconWrapper>
          <IconWrapper>
            <Phone />
          </IconWrapper>
          <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
        </IconsAndButton>
      </HeaderWrapper>
    </RootStyled>
  );
};
