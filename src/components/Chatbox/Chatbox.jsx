import React from "react";
import { CardMessage, ChatboxStyled } from "./chatboxStyled";
import checkWhite from "../../assets/tick-white-double.svg";
import checkGreen from "../../assets/tick-green-double.svg";

export default function Chatbox(props) {
  const deleteMessage = (idMessage) => {
    const excludeMessage = props.value.filter((message) => {
      return message.authorId !== idMessage;
    });

    let returnDelete = window.confirm("Você deseja apagar a mensagem?");

    if (returnDelete) {
      props.setValue(excludeMessage);
    }
  };

  const messages = props.value.map((message, index) => {
    return (
      <CardMessage
        key={index}
        author={message.person}
        onDoubleClick={() => deleteMessage(message.authorId)}
      >
        <h1 className="sender">{message.person}</h1>
        <div className="container-message">
          <p>{message.message}</p>
          <div className="container-check">
            <p>{message.time}</p>
            <img
              src={
                message.person !== "Paula" ? `${checkGreen}` : `${checkWhite}`
              }
              alt="ticket"
            />
          </div>
        </div>
      </CardMessage>
    );
  });
  return <ChatboxStyled>{messages}</ChatboxStyled>
}
