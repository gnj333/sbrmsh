import {
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  Name,
  Salary,
  Wrapper,
} from "./styled";
import { Button } from "../../shared/ui/Button";

type Props = {
  item: {
    name: string;
    payments: string;
    experience: string;
    schedule: string;
    workHours: string | null;
    workFormat: string | null;
    salary: {
      startSalary: number;
      endSalary: number | null;
    };
    graffic: string | null;
    link: string;
  };
};

export const CareerItem = ({ item }: Props) => (
  <Wrapper>
    <Name>{item.name}</Name>
    <DescriptionWrapper>
      <Description>Выплаты: {item.payments}</Description>
      <Description>Опыт работы: {item.experience}</Description>
      <Description>{item.schedule}</Description>
      <Description>Рабочие часы: {item.workHours}</Description>
      {item.workFormat && (
        <Description>Формат работы: {item.workFormat}</Description>
      )}
      {item.graffic && <Description>График: {item.graffic}</Description>}
    </DescriptionWrapper>
    <Salary>
      от {item?.salary?.startSalary} ₽ {item.salary.endSalary ? `до` : ""}{" "}
      {item?.salary?.endSalary} {item.salary.endSalary ? "₽" : ""}
    </Salary>
    <a href={item.link} target="_blank" rel="noreferrer">
      <ButtonWrapper>
        <Button>Откликнуться</Button>
      </ButtonWrapper>
    </a>
  </Wrapper>
);
