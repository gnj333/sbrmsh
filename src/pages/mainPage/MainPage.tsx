import {Header} from "../../widgets/Header/ui/Header.tsx";
import {NavBar} from "../../widgets/navigationBar/ui/NavBar.tsx";
import {ContentWrapper, MainPageWrapper} from "./styled.ts";
import {MainInfo} from "../../widgets/mainInfo/MainInfo.tsx";


export const MainPage = () => {
    return (
        <MainPageWrapper>
            <NavBar/>
            <ContentWrapper>
                <Header/>
                <MainInfo/>
            </ContentWrapper>
        </MainPageWrapper>
    )
}