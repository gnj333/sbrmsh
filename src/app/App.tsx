import { GlobalWrapper } from "./styled.ts";
import { GlobalStyle } from "../shared/styles/globalStyles.ts";
import Router from "./Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalWrapper>
        <Router />
      </GlobalWrapper>
    </>
  );
};

export default App;
