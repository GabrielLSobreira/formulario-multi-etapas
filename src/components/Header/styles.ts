import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195c;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
    @media (max-width: 720px) {
      font-size: 26px;
    }
    @media (max-width: 320px) {
      font-size: 23px;
    }
  }

  p {
    font-size: 14px;
    color: #b8b8d4;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
