import {
  DateWrapper,
  Image,
  ImageWrapper,
  NewsItemWrapper,
  Text,
} from "./styled";
import { Link } from "../../shared/ui/Link";
import { newPageRoute } from "../../shared/routes";
import { Date } from "../../shared/ui/styled";

type Props = {
  item: {
    image: string;
    text: string;
    date: string;
    id: number;
  };
};

export const NewsItem = ({ item }: Props) => (
  <Link to={newPageRoute} params={{ id: item?.id.toString() }}>
    <NewsItemWrapper>
      <ImageWrapper>
        <Image src={item.image} alt={item.text} />
      </ImageWrapper>
      <DateWrapper>
        <Date>{item.date}</Date>
      </DateWrapper>
      <Text>{item.text}</Text>
    </NewsItemWrapper>
  </Link>
);
