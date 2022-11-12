import styled from "styled-components";

export const ChatboxStyled = styled.section`
  height: calc(100vh - 155px);
  width: 100%;
  min-width: 455px;
  background-color: #f1f4f7;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 20px;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const CardMessage = styled.section`
  background-color: ${(props) =>
    props.author === "Paula" ? "#61C554" : "#E8ECEF"};
  color: ${(props) => (props.author === "Paula" ? "white" : "black")};
  align-self: ${(props) => (props.author === "Paula" ? "flex-end" : "flex-start")};
  min-width: 100px;
  max-width: 300px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;

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
