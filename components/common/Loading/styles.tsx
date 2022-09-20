import styled from '@emotion/styled';

export const StyledLoading = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
      0px 0px 4px rgba(51, 51, 51, 0.05);
    border-radius: 30px;
    background-color: aliceblue;
    width: 40rem;
    height: 20rem;
    &__spinner {
      box-sizing: border-box;
      width: 84px;
      height: 84px;
      border-radius: 50%;
      border: 8px solid transparent;
      border-top-color: green;
      border-bottom-color: green;
      animation: spinner 0.8s ease infinite;
      margin-top: 30px;
    }
    &__tips {
      display: flex;
      flex-direction: column;
      margin: 0 40px;
      &__heading {
        font-weight: 800;
        margin-right: 20px;
        font-size: 16px;
        margin-bottom: 10px;
      }
      &__text {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
