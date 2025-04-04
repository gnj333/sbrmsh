import { Date, Image, ImageWrapper, NewsItemWrapper, Text } from "./styled";
import { Link } from "../../shared/ui/Link";
import { newPageRoute } from "../../shared/routes";

type Props = {
  item: {
    image: string;
    text: string;
    date: string;
    id: number;
  };
};

export const NewsItem = ({ item }: Props) => (
  <Link to={newPageRoute} params={{ id: item?.id }}>
    <NewsItemWrapper>
      <ImageWrapper>
        <Image src={item.image} alt={item.text} />
      </ImageWrapper>
      <Date>{item.date}</Date>
      <Text>{item.text}</Text>
    </NewsItemWrapper>
  </Link>
);
