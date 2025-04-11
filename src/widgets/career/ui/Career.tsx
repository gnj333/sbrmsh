import { useEffect } from "react";
import {
  CardsWrapper,
  CareerText,
  CareerTitle,
  CareerWrapper,
  ImageAndMainInfoWrapper,
} from "./styled";
import { data } from "../model";
import { CareerItem } from "../../../entities/careerItem/CareerItem";

export const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <ImageAndMainInfoWrapper>
      <CareerWrapper>
        <CareerTitle>Карьера</CareerTitle>
        <CareerText>
          Компания ООО «НПП СибБурМаш» является лидером производства
          оборудования с сервисным сопровождением для нефтегазовой
          промышленности. Постоянные заказчики: ПАО «НК «Роснефть», ПАО
          «Газпромнефть», ПАО «ЛУКОЙЛ», ПАО «НОВАТЭК», ПАО «Сургутнефтегаз» и
          др. Наша компания - прямой работодатель, существует на рынке более 30
          лет.
        </CareerText>
      </CareerWrapper>
      <CardsWrapper>
        {data.map((item, index) => (
          //@ts-ignore
          <CareerItem item={item} key={index} />
        ))}
      </CardsWrapper>
    </ImageAndMainInfoWrapper>
  );
};
