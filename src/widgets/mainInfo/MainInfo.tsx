import {
    ControllersPicture,
    ControllersPictureWrapper, ControllersText, ControllersTextWrapper, ControllersWrapper,
    MainInfoWrapper, MoreButton,
    Title,
    TitleAndButtonWrapper
} from "./styled.ts";


export const MainInfo = () => (
    <MainInfoWrapper>
        <ControllersWrapper>
            <ControllersPictureWrapper>
                <ControllersPicture src={'assets/controller.png'}/>
                <ControllersPicture src={'assets/controller.png'}/>
                <ControllersPicture src={'assets/controller.png'}/>
                <ControllersPicture src={'assets/controller.png'}/>
            </ControllersPictureWrapper>
            <ControllersTextWrapper>
                <ControllersText>
                    Программируемые логические контроллеры (ПЛК) — это устройства для автоматизации управления в
                    промышленности. Они контролируют оборудование, собирают данные с датчиков и выполняют команды по
                    заданной программе. ПЛК применяются для управления производственными линиями, мониторинга процессов
                    и обеспечения стабильной работы систем. Их основное преимущество — гибкость настройки и надёжность.
                </ControllersText>
            </ControllersTextWrapper>
        </ControllersWrapper>
        <TitleAndButtonWrapper>
            <Title>
                ПРОИЗВОДИМ<br/> ПРОГРАММИРУЕМЫЕ<br/> ЛОГИЧЕСКИЕ КОНТРОЛЛЕРЫ
            </Title>
            <MoreButton>ПОДРОБНЕЕ</MoreButton>
        </TitleAndButtonWrapper>
    </MainInfoWrapper>
)