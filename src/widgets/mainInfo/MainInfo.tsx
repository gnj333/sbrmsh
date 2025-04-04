import {
  ButtonWrapper,
  ControllersPicture,
  ControllersPictureWrapper,
  ControllersWrapper,
  GrayWrapper,
  MainInfoWrapper,
  Title,
  TitleAndButtonWrapper,
} from "./styled.ts";
import { Button } from "../../shared/ui/Button.tsx";
import { AboutUs } from "../aboutUs/AboutUs";
import { Advantages } from "../advantages/Advantages";
import { Modules } from "../modules/ui/Modules";
import Controller from "../../shared/assets/controller.png";

export const MainInfo = () => (
  <MainInfoWrapper>
    <GrayWrapper>
      <ControllersWrapper>
        <ControllersPictureWrapper>
          <ControllersPicture src={Controller} />
          <ControllersPicture src={Controller} />
          <ControllersPicture src={Controller} />
          <ControllersPicture src={Controller} />
        </ControllersPictureWrapper>
      </ControllersWrapper>
      <TitleAndButtonWrapper>
        <Title>
          ПРОИЗВОДИМ
          <br /> ПРОГРАММИРУЕМЫЕ
          <br /> ЛОГИЧЕСКИЕ КОНТРОЛЛЕРЫ
        </Title>
        <ButtonWrapper>
          <Button>В КАТАЛОГ</Button>
        </ButtonWrapper>
      </TitleAndButtonWrapper>
    </GrayWrapper>
    <AboutUs />
    <Advantages />
    <Modules />
  </MainInfoWrapper>
);
