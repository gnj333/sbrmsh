import styled from "styled-components";
import { mainPageRoute } from "../shared/routes";
import { Link } from "../shared/ui/Link";
import { theme } from "../shared/styles/theme";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.gray300};
  color: white;
  text-align: center;
  gap: 50px;
  width: 100%;
  position: absolute;
  left: 0;
`;

const ErrorCode = styled.h1`
  font-size: 96px;
  font-weight: bold;
  margin: 0;
  color: ${theme.colors.black};
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  color: ${theme.colors.black};
`;

const BackButton = styled.a`
  padding: 10px 20px;
  font-size: 18px;
  color: ${theme.colors.gray300};
  background: ${theme.colors.black};
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  m &:hover {
    background: lightgray;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
`;

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Image src={"/assets/logo.svg"} />
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Страница не найдена</ErrorMessage>
      <Link to={mainPageRoute}>
        <BackButton href="/">Вернуться на главную</BackButton>
      </Link>
    </NotFoundWrapper>
  );
};
