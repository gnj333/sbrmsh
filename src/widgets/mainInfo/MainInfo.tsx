import {
  ButtonWrapper,
  ControllersPicture,
  ControllersPictureWrapper,
  ControllersWrapper,
  MainInfoWrapper,
  Title,
  TitleAndButtonWrapper,
} from "./styled.ts";
import { Button } from "../../shared/ui/Button.tsx";
import { AboutUs } from "../aboutUs/AboutUs";
import { Advantages } from "../advantages/Advantages";
import { Modules } from "../modules/ui/Modules";

export const MainInfo = () => (
  <MainInfoWrapper>
    <ControllersWrapper>
      <ControllersPictureWrapper>
        <ControllersPicture src={"/assets/controller.png"} />
        <ControllersPicture src={"/assets/controller.png"} />
        <ControllersPicture src={"/assets/controller.png"} />
        <ControllersPicture src={"/assets/controller.png"} />
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
    <AboutUs />
    <Advantages />
    <Modules />
  </MainInfoWrapper>
);
