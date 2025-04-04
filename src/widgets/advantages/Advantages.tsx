import {
  AdvantagesWrapper,
  BlocksWrapper,
  Box,
  Image,
  ImageAndText,
  TextTitle,
  TextWrapper,
  Title,
  TitleWrapper,
} from "./styled";

export const Advantages = () => (
  <AdvantagesWrapper>
    <TitleWrapper>
      <Title>ПРЕИМУЩЕСТВА НАШЕЙ ПРОДУКЦИИ</Title>
    </TitleWrapper>
    <BlocksWrapper>
      <ImageAndText>
        <Image src={"/assets/arrow.svg"} alt="arrow" />
        <TextWrapper>
          <TextTitle>Высокое качество</TextTitle>
          Мы используем современные материалы и передовые технологии на всех
          этапах производства.
        </TextWrapper>
      </ImageAndText>
      <Box>
        <ImageAndText>
          <Image src={"/assets/settings.svg"} alt="settings" />
          <TextWrapper>
            <TextTitle>Надежность</TextTitle>
            Наши устройства проходят строгие испытания, что гарантирует их
            длительный срок службы и бесперебойную работу.
          </TextWrapper>
        </ImageAndText>
      </Box>
      <ImageAndText>
        <Image src={"/assets/people.svg"} alt="people" />
        <TextWrapper>
          <TextTitle>Индивидуальный подход</TextTitle>
          Мы предлагаем решения, адаптированные под уникальные потребности
          каждого клиента.
        </TextWrapper>
      </ImageAndText>
    </BlocksWrapper>
  </AdvantagesWrapper>
);
