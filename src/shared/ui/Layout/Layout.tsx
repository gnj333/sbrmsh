import { NavBar } from "../../../widgets/navigationBar/ui/NavBar";
import { Header } from "../Header/ui/Header";
import { Footer } from "../Footer/Footer";
import { ReactNode } from "react";
import {
  Column,
  ContentWrapper,
  HeaderAndContentWrapper,
  PageWrapper,
} from "./styled";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Column>
    <PageWrapper>
      <NavBar />
      <HeaderAndContentWrapper>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </HeaderAndContentWrapper>
    </PageWrapper>
    <Footer />
  </Column>
);
