import {
  Column,
  Flex,
  FooterWrapper,
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
import Logo from "../../../shared/assets/logo.svg?react";
import Vk from "../../../shared/assets/vk.svg?react";
import Tg from "../../../shared/assets/tg.svg?react";
import Wassap from "../../../shared/assets/wassap.svg?react";
import {
  routeFromFooterToAboutUs,
  routeFromFooterToNews,
  routeFromFooterToVacancies,
} from "../../routes";
import { Link as RouterLink } from "../Link";

export const Footer = () => (
  <>
    <FooterWrapper>
      <ImageWrapper>
        <Logo />
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
            <RouterLink to={routeFromFooterToAboutUs}>
              <Paragraph>О нас</Paragraph>
            </RouterLink>
            <RouterLink to={routeFromFooterToNews}>
              <Paragraph>Новости</Paragraph>
            </RouterLink>
            <RouterLink to={routeFromFooterToVacancies}>
              <Paragraph>Вакансии</Paragraph>
            </RouterLink>
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
          <Tg />
        </IconWrapper>
        <IconWrapper>
          <Wassap />
        </IconWrapper>
        <IconWrapper>
          <Vk />
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
