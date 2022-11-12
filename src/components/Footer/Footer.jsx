import { useState } from "react";
import { FooterStyled } from "./footerStyled";
import emoji from "../../assets/smiley.svg";
import paperclip from "../../assets/paperclip.svg";
import microphone from "../../assets/microphone.svg";

export default function Footer(props) {
  const [message, setMessage] = useState("");

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  function oneKeyDownInputs(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const newMessage = [...props.value];

      const newPeople = {
        authorId: Date.now(),
        person: props.person,
        message: message,
        time: new Date().toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      };
      newMessage.push(newPeople);
      props.setValue(newMessage);

      setMessage("");
    }
  }
  return (
    <FooterStyled>
      <div className="container-input">
        <img src={emoji} alt="emoji" />
        <textarea
          placeholder="Escreva uma mensagem"
          type={"text"}
          value={message}
          onChange={onChangeMessage}
          onKeyDown={oneKeyDownInputs}
        />
        <img src={paperclip} alt="paperclip" />
      </div>
      <button>
        <img src={microphone} alt="microphone" />
      </button>
    </FooterStyled>
  );
};


