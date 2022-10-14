import styled from '@emotion/styled';
import { prBlueGoogle, prGrayGithub } from '../../styles/colors';

export const StyledLogin = styled.div`
  padding-top: 150px;
  .social {
    width: 350px;
    margin: 0 auto;

    &__logo {
      margin-bottom: 90px;
      display: flex;
      justify-content: center;
    }

    &__google,
    &__github {
      width: 350px;
      padding: 10px;
      margin: 5px auto;
      cursor: pointer;
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      position: relative;
      border-radius: 5px;
    }

    &__image {
      position: absolute;
      left: 10px;
      top: 8px;
    }

    &__google {
      background-color: ${prBlueGoogle};
    }

    &__github {
      background-color: ${prGrayGithub};
    }
  }
`;
