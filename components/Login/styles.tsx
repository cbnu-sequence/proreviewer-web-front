import styled from '@emotion/styled';

export const StyledLogin = styled.div`
  form {
    width: 35%;
    margin: 30vh auto 0;
    text-align: center;
    input {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border: 1px solid lightgray;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      background-color: skyblue;
      color: white;
      cursor: pointer;
    }
  }
  .register-proreviewer {
    text-align: center;
    margin-top: 20px;
    span {
      font-size: 11px;
      margin-right: 10px;
    }
    a {
      font-size: 11px;
      font-weight: 700;
      color: skyblue;
    }
  }

  @media screen and (max-width: 768px) {
    form {
      width: 80%;
    }
  }
`;
