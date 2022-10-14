import styled from '@emotion/styled';

export const Block = styled.div`
  background-color: #B8E6E1;
  margin: 0;
  display:flex;
`

export const StyledWriteBoard = styled.form`
  width: 78%;
  margin: 0 auto;
  margin-bottom: 7rem;
  padding: 2.5rem 3.5rem 3.5rem;
  font-size: 1.5rem;
  background-color: #FFFFFF;

  .title {
    font-size: 2.4rem;
    font-weight: bold;
    padding: 0 3.5rem 3.5rem;
    text-align: center;
  }

  .subTitle {
    font-size: 1.3rem;
    padding-left: 5.5rem;
  }

  .subTitleDiv {
    display: flex;
    @media screen and (max-width: 1200px) {
      display:block;
    }
  }

  .inputBox {
    width: 82%;
    @media screen and (max-width: 1250px) {
      margin: 0.5rem 0rem 0rem 4.5rem;
    }
  }

  .subTitleInput {
    font-size: 1rem;
    border: 1px solid #CECECE;
    // margin: 1rem;
    margin: 0rem 1rem 1rem;
    padding: 0.5rem;
    width: 97.3%;
  }

  .inputBox_file {
    font-size: 1rem;
    border: 1px solid #CECECE;
    margin: 1.2rem 0.6rem 1.2rem 0.3rem;
    padding: 0.5rem;
    width: 25%;
  }

  .filePlusIcon {
    color: #E41111;
    cursor: pointer;
    vertical-align: -26%;
    margin-left: 0.5rem;
  }

  .button {
    display: flex;
    margin-top: 2rem;
    margin-left: auto;
    padding: 0.5rem 1.3rem;
    border: none;
    border-radius: 0.35rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: #82CBC4;
    cursor: pointer;
  }
  `;