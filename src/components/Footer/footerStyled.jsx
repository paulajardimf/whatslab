import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #f1f4f7;
  min-height: 5.625rem;
  width: 100%;
  min-width: 24.563rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .container-input {
    background-color: white;
    min-height: 3.125rem;
    width: calc(100% - 6.875rem);
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 7px 7px #00000005;
    textarea {
      height: 30px;
      width: calc(100% - 6.25rem);
      resize: none;
      border: none;
      font-weight: 400;
      font-size: 0.875rem;
      padding: 5px 10px;
    }
    textarea:focus {
      outline: none;
    }
    textarea:placeholder {
      color: #78787c;
    }
  }
  button {
    background-color: #61c554;
    box-shadow: 0 7px 7px #00000005;
    border: none;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`;
