import { useUnit } from "effector-react";
import { $newsDetail } from "../model";
import { Description, Image, NewWrapper, Title } from "./styled";
import { Date } from "../../../shared/ui/styled";
import parse from "html-react-parser";

export const New = () => {
  const newDetail = useUnit($newsDetail);

  if (!newDetail) return null;

  return (
    <NewWrapper>
      <Date>{newDetail?.date}</Date>
      <Title>{newDetail?.text}</Title>
      <Image src={newDetail?.image} />
      <Description>{parse(newDetail.description)}</Description>
    </NewWrapper>
  );
};
