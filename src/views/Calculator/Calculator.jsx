import { useState } from "react";
import { Display, Keyboard } from "../../components";
import * as Style from "./Calculator.styles";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operation, setOperation] = useState("");

  return (
    <Style.Container>
      <Style.Calc>
        <Display currentNumber={currentNumber} />
        <Keyboard operation={operation} />
      </Style.Calc>
    </Style.Container>
  );
};

export default Calculator;
