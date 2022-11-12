import styled from "styled-components";

export const ChatboxStyled = styled.section`
  height: calc(708px - 90px);
  width: 593px;
  background-color: #f1f4f7;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: end;
  padding: 0 20px;
`;

export const CardMessage = styled.section`
  background-color: ${(props) =>
    props.author === "Paula" ? "#61C554" : "#E8ECEF"};
  color: ${(props) => (props.author === "Paula" ? "white" : "black")};
  /* margin-left: ${(props) => (props.author === "Paula" ? "auto" : 0)}; */
  align-self: ${(props) => (props.author === "Paula" ? "flex-end" : "flex-start")};
  min-width: 100px;
  max-width: 300px;
  padding: 8px 10px;
  border-radius: 10px;

  .sender {
    font-weight: 600;
    font-size: 0.875rem;
    padding-bottom: 3px;
  }

  .container-message {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 400;
      font-size: 16px;
      word-wrap: break-word;
    }
  }

  .container-check {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      font-weight: 400;
      font-size: 0.688rem;
      color: #727272;
      text-align: right;
    }
    img {
      width: 16px;
      margin-left: 5px;
    }
  }
`;
