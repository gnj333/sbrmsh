import styled from "styled-components";
import { theme } from "../styles/theme";
import { Layout } from "./Layout/Layout";
import { Link } from "./Link";
import { mainPageRoute } from "../routes";
import { useEffect } from "react";

const PlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
  width: 100%;
  height: 50vh;
`;

const Card = styled.div`
  background-color: ${theme.colors.blue800};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 20px;
  color: white;
`;

export const FallbackPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <PlaceholderWrapper>
        <Card>
          <Title>Страница в разработке</Title>
          <Text>Мы уже работаем над этим! Скоро здесь появится контент.</Text>
          <Link to={mainPageRoute}>
            <Text>Вернуться на главную</Text>
          </Link>
        </Card>
      </PlaceholderWrapper>
    </Layout>
  );
};
