import {
  AdvantagesWrapper,
  BlocksWrapper,
  Box,
  ImageAndText,
  TextTitle,
  TextWrapper,
  Title,
  TitleWrapper,
} from "./styled";
import Arrow from "../../shared/assets/arrow.svg?react";
import Settings from "../../shared/assets/settings.svg?react";
import People from "../../shared/assets/people.svg?react";

export const Advantages = () => (
  <AdvantagesWrapper>
    <TitleWrapper>
      <Title>ПРЕИМУЩЕСТВА НАШЕЙ ПРОДУКЦИИ</Title>
    </TitleWrapper>
    <BlocksWrapper>
      <ImageAndText>
        <Arrow />
        <TextWrapper>
          <TextTitle>Высокое качество</TextTitle>
          Мы используем современные материалы и передовые технологии на всех
          этапах производства.
        </TextWrapper>
      </ImageAndText>
      <Box>
        <ImageAndText>
          <Settings />
          <TextWrapper>
            <TextTitle>Надежность</TextTitle>
            Наши устройства проходят строгие испытания, что гарантирует их
            длительный срок службы и бесперебойную работу.
          </TextWrapper>
        </ImageAndText>
      </Box>
      <ImageAndText>
        <People />
        <TextWrapper>
          <TextTitle>Индивидуальный подход</TextTitle>
          Мы предлагаем решения, адаптированные под уникальные потребности
          каждого клиента.
        </TextWrapper>
      </ImageAndText>
    </BlocksWrapper>
  </AdvantagesWrapper>
);
