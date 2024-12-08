import {GlobalWrapper} from "./styled.ts";
import {MainPage} from "../pages/mainPage/MainPage.tsx";
import {GlobalStyle} from "../shared/styles/globalStyles.ts";

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <GlobalWrapper>
                <MainPage/>
            </GlobalWrapper>
        </>
    )
};

export default App;
