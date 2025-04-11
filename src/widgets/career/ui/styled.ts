import styled from "styled-components";
import Rabotyaga from "../../../shared/assets/rabot9ga.jpg";

export const CareerWrapper = styled.div`
  width: 100%;
  background-size: cover;
  background-position: left bottom;
  border-radius: 42px;
  background-image:
    linear-gradient(
      to bottom,
      rgba(75, 108, 183, 0.4),
      rgba(75, 108, 183, 0.4)
    ),
    url(${Rabotyaga});
  display: flex;
  justify-content: center;
  padding: 88px 36px 88px 36px;
  flex-direction: column;
  gap: 36px;
`;

export const CareerTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  color: white;
`;

export const CareerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const ImageAndMainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
