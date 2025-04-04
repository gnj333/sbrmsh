import {
  Column,
  Flex,
  FooterWrapper,
  Icon,
  IconsWrapper,
  IconWrapper,
  ImageWrapper,
  Link,
  Paragraph,
  ParagraphsWrapper,
  TextWrapper,
  Title,
  Warning,
} from "./styled";
import { LogoWrapper } from "../../../widgets/navigationBar/ui/styled";

export const Footer = () => (
  <>
    <FooterWrapper>
      <ImageWrapper>
        <LogoWrapper src={"assets/logo.svg"} />
      </ImageWrapper>
      <Flex>
        <TextWrapper>
          <Title>ПРОДУКЦИЯ</Title>
          <ParagraphsWrapper>
            <Paragraph>Входные модули</Paragraph>
            <Paragraph>Выходные модули</Paragraph>
            <Paragraph>Контроллеры</Paragraph>
            <Paragraph>Аксессуары</Paragraph>
          </ParagraphsWrapper>
        </TextWrapper>
        <TextWrapper>
          <Title>О КОМПАНИИ</Title>
          <ParagraphsWrapper>
            <Paragraph>О нас</Paragraph>
            <Paragraph>Новости</Paragraph>
            <Paragraph>Вакансии</Paragraph>
          </ParagraphsWrapper>
        </TextWrapper>
        <TextWrapper>
          <Title>КОНТАКТЫ</Title>
          <ParagraphsWrapper>
            <Paragraph>ООО НПП «СибБурМаш»</Paragraph>
            <Paragraph>625031, г. Тюмень </Paragraph>
            <Paragraph>ул. Ветеранов труда, 58А</Paragraph>
            <Paragraph>+7 (3452) 47-25-86</Paragraph>
            <Link>info@sibburmash.ru</Link>
          </ParagraphsWrapper>
        </TextWrapper>
      </Flex>
      <IconsWrapper>
        <IconWrapper>
          <Icon src={"/assets/tg.svg"} />
        </IconWrapper>
        <IconWrapper>
          <Icon src={"/assets/wassap.svg"} />
        </IconWrapper>
        <IconWrapper>
          <Icon src={"/assets/vk.svg"} />
        </IconWrapper>
      </IconsWrapper>
    </FooterWrapper>
    <Column>
      <Warning>© 2025. © «СибБурМаш»</Warning>
      <Warning>
        Этот сайт защищен при помощи reCAPTCHA, применяются Политика
        конфиденциальности и Условия использования Google.
      </Warning>
    </Column>
  </>
);
