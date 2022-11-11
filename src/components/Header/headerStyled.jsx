import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  height: calc(780px - 708px);
  width: 593px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  img {
    border-radius: 50%;
  }
  .container-info {
    display: flex;
    border: 1px solid black;
    align-items: center;
  }
  .info-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10px;
  }
  h3 {
    font-weight: bold;
    font-size: 1rem;
  }
  p {
    font-weight: 500;
    font-size: 0.75rem;
    color: #b9bec3;
  }
  .container-icons {
    display: flex;
    width: 134px;
    justify-content: space-between;
  }
  .icon {
    background-color: #f8f8f8;
    height: 38px;
    width: 38px;
    padding: 10px;
  }
`;
