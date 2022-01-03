import React from "react";
import ReactDOM from "react-dom";
import ButtonMui from "./Components/ButtonMui";
import StylesMui from "./Components/StylesMui";
import TypographyMui from "./Components/TypographyMui";




function App() {
  return (
    <>
      <ButtonMui />
      <TypographyMui />
      <StylesMui />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
