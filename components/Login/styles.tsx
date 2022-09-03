import styled from '@emotion/styled';

export const StyledLogin = styled.article`
  background: linear-gradient(45deg, #b4dfe7, #8197a7, #89b6dd);
  height: 100vh;
  padding: 20vh 0;
  form {
    background: #dde7ea44;
    border-radius: 10px;
    width: 600px;
    margin: 0 auto;
    padding: 60px 0;
    text-align: center;
    .logo {
      width: 60%;
      color: white;
      font-size: 40px;
      font-weight: 800;
      margin: 0 auto 20px;
    }
    .email,
    .password {
      width: 60%;
      margin-top: 20px;
      padding: 15px 20px;
      font-size: 17px;
      border: 0.5px solid white;
      border-radius: 10px;
      outline-color: white;
      outline-width: 1px;
      background-color: inherit;
      color: white;
      &::placeholder {
        color: white;
      }
    }
    button {
      width: 60%;
      font-size: 20px;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      background-color: #a3d1de85;
      color: white;
      margin-top: 30px;
      padding: 15px 0;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    form {
      width: 90%;
      .logo {
        font-size: 30px;
        margin: 0 auto 10px;
      }
      .email,
      .password {
        margin-top: 10px;
        padding: 15px 10px;
        font-size: 13px;
      }
      button {
        font-size: 15px;
        margin-top: 20px;
      }
    }
  }
`;
