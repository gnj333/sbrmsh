import {
  Image,
  ModulesBlockWrapper,
  ModulesWrapper,
  ModuleTitle,
  ModuleWrapper,
  Title,
} from "./styled";
import { Button } from "../../../shared/ui/Button";
import { $modules } from "../model";
import { useUnit } from "effector-react";

export const Modules = () => {
  const modules = useUnit($modules);
  return (
    <ModulesBlockWrapper>
      <Title>ВИДЫ МОДУЛЕЙ КОТОРЫЕ МЫ ПРОИЗВОДИМ</Title>
      <ModulesWrapper>
        {modules.map((module) => (
          <ModuleWrapper key={module.name}>
            <ModuleTitle count={module.name.length}>{module.name}</ModuleTitle>
            <Image src={module.image} alt="controller" />
            <Button>Подробнее</Button>
          </ModuleWrapper>
        ))}
      </ModulesWrapper>
    </ModulesBlockWrapper>
  );
};
