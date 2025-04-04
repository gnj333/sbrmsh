import { NavBar } from "../../../widgets/navigationBar/ui/NavBar";
import { Header } from "../Header/ui/Header";
import { Footer } from "../Footer/Footer";
import { ReactNode } from "react";
import { Column, ContentWrapper, PageWrapper } from "./styled";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Column>
    <PageWrapper>
      <NavBar />
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </PageWrapper>
    <Footer />
  </Column>
);
