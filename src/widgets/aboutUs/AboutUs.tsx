import {
  AboutUsWrapper,
  BlocksWithNews,
  BlockWrapper,
  Date,
  DateAndNew,
  Image,
  InfoWrapper,
  NewsButton,
  NewsImage,
  NewsWrapper,
  Paragraph,
  TextWrapper,
  Title,
} from "./styled";
import { Link } from "../../shared/ui/Link";
import { newsPageRoute } from "../../shared/routes";
import Tehnik from "../../shared/assets/tehnik.jpg";
import Tehnik2 from "../../shared/assets/tehnik2.jpg";
import News from "../../shared/assets/news.jpg";
import Fire from "../../shared/assets/fire.svg?react";

export const AboutUs = () => (
  <AboutUsWrapper>
    <BlocksWithNews>
      <InfoWrapper>
        <BlockWrapper>
          <TextWrapper>
            <Title>О нас</Title>
            <Paragraph>
              Сиббурмаш – это ведущий российский производитель оборудования для
              бурения, добычи и переработки нефти и газа. Наша компания была
              основана с целью удовлетворения растущих потребностей нефтегазовой
              отрасли в высококачественных и надежных машинах.
            </Paragraph>
          </TextWrapper>
          <Image src={Tehnik} />
        </BlockWrapper>
        <BlockWrapper>
          <Image src={Tehnik2} />
          <TextWrapper>
            <Title>Наша миссия</Title>
            <Paragraph>
              Мы стремимся предоставлять нашим клиентам инновационные решения,
              которые способствуют повышению эффективности и безопасности их
              операций. Наша команда профессионалов обладает богатым опытом и
              глубокими знаниями в области инженерии и технологий.
            </Paragraph>
          </TextWrapper>
        </BlockWrapper>
      </InfoWrapper>
      <NewsWrapper>
        <NewsImage src={News} />
        <Link to={newsPageRoute}>
          <NewsButton>
            <Fire />
            Новости
          </NewsButton>
        </Link>
        <DateAndNew>
          <Date>19.03.2025</Date>
          Сиббурмаш принял участие в Тюменском нефтегазовом форуме
        </DateAndNew>
      </NewsWrapper>
    </BlocksWithNews>
  </AboutUsWrapper>
);
