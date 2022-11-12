import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  height: 72px;
  width: 100%;
  min-width: 455px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-left: 1px solid #f1f4f7;
  border-right: 1px solid #f1f4f7;

  .container-icons {
    display: flex;
    width: 134px;
    justify-content: space-between;
    align-items: flex-end;
  }
  .icon {
    border-radius: 50%;
    background-color: #f8f8f8;
    height: 38px;
    width: 38px;
    padding: 10px;
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    border-radius: 50%;
    height: 55px;
    width: 55px;
  }
  .info-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10px;
  }
  select {
    font-weight: bold;
    font-size: 1rem;
    border: none;
  }
  p {
    font-weight: 500;
    font-size: 0.75rem;
    color: #b9bec3;
    margin-left: 4px;
  }
`;
