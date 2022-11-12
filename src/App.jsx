import React, { useState } from "react";
import Header from "./components/Header/Header";
import Chatbox from "./components/Chatbox/Chatbox";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyle";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export default function App() {
  const [value, setValue] = useState([]);
  const [person, setPerson] = useState("Paula");

  return (
    <div className="App">
      <GlobalStyle />
      <Header person={person} setPerson={setPerson} />
      <Chatbox value={value} setValue={setValue} />
      <Footer value={value} setValue={setValue} person={person} />
    </div>
  );
}
