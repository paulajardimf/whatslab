import React, { useState } from "react";
import Header from "./components/Header/Header";
import Chatbox from "./components/Chatbox/Chatbox";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [value, setValue] = useState([]);
  const [person, setPerson] = useState("Paula");

  return (
    <div>
      <Header person={person} setPerson={setPerson} />
      <Chatbox value={value} setValue={setValue} />
      <Footer value={value} setValue={setValue} person={person} />
    </div>
  );
}
