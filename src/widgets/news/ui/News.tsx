import { useUnit } from "effector-react/compat";
import { $news } from "../model";
import { CompanyNews, NewsItemsWrapper, NewsWrapper, Title } from "./styled";
import { NewsItem } from "../../../entities/newsItem/NewsItem";
import { useEffect } from "react";

export const News = () => {
  const news = useUnit($news);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <NewsWrapper>
      <CompanyNews>
        <Title>Новости компании</Title>
      </CompanyNews>
      <NewsItemsWrapper>
        {news?.map((item, i) => <NewsItem item={item} key={i} />)}
      </NewsItemsWrapper>
    </NewsWrapper>
  );
};
