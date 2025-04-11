import styled from "styled-components";

export const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: 600;
  margin-top: 32px;
`;

export const Image = styled.img`
  height: 600px;
  margin-top: 32px;
  border-radius: 32px;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-top: 32px;

  p {
    margin-bottom: 20px;
    line-height: 30px;
  }

  h1 {
    margin-bottom: 10px;
  }
`;
