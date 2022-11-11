import { HeaderStyled } from "./headerStyled";
import people from "../../assets/contato.png";
import camera from "../../assets/video-cam.svg";
import phone from "../../assets/phone.svg";
import hamburguer from "../../assets/hamburger.svg";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="container-info">
        <img src={people} alt="" />
        <div className="info-text">
          <h3>Nome</h3>
          <p>Status</p>
        </div>
      </div>
      <div className="container-icons">
        <img src={camera} alt="" className="icon" />
        <img src={phone} alt="" className="icon" />
        <img src={hamburguer} alt="" className="icon" />
      </div>
    </HeaderStyled>
  );
}
