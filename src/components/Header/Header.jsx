import React, { useState } from "react";
import { HeaderStyled, Person } from "./headerStyled";
import people from "../../assets/contato.png";
import camera from "../../assets/video-cam.svg";
import phone from "../../assets/phone.svg";
import hamburguer from "../../assets/hamburger.svg";

export default function Header(props) {
  const onChangePerson = (e) => {
    props.setPerson(e.target.value);
  };

  const returnImage = () => {
    switch (props.person) {
      case "Paula":
        return "https://github.com/paulajardimf.png";
        break;
      case "Aline":
        return "https://github.com/AlineBCBenjamim.png";
        break;
    }
  };

  return (
    <HeaderStyled>
      <Person>
        <img src={returnImage()} alt="" />
        <div className="info-text">
          <select value={props.person} onChange={onChangePerson}>
            <option value="Paula">Paula</option>
            <option value="Aline">Aline</option>
          </select>
          <p>Online</p>
        </div>
      </Person>
      <div className="container-icons">
        <img src={camera} alt="" className="icon" />
        <img src={phone} alt="" className="icon" />
        <img src={hamburguer} alt="" className="icon" />
      </div>
    </HeaderStyled>
  );
}
