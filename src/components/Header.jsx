import React from "react";
import Logo from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Image presents a quiz with pencil" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
