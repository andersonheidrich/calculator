import { useState } from "react";
import { Display, Keyboard } from "../../components";
import * as Style from "./Calculator.styles";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [enteredNumber, setEnteredNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    if (number === "." && currentNumber.includes(".")) return;
    if (currentNumber.length <= 20) {
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
    }
  };

  const handleSum = () => {
    if (enteredNumber === "0") {
      setEnteredNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(enteredNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinus = () => {
    if (enteredNumber === "0") {
      setEnteredNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const difference = Number(enteredNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setOperation("");
    }
  };

  const handleMultiply = () => {
    if (enteredNumber === "0") {
      setEnteredNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const product = Number(enteredNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setOperation("");
    }
  };

  const handleDivide = () => {
    if (enteredNumber === "0") {
      setEnteredNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      if (Number(currentNumber) === 0) {
        alert("Não é possível dividir por zero!");
        return;
      }
      const quotient = Number(enteredNumber) / Number(currentNumber);
      setCurrentNumber(String(quotient));
      setOperation("");
    }
  };

  const handleEqual = () => {
    if (enteredNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleMinus();
          break;
        case "*":
          handleMultiply();
          break;
        case "/":
          handleDivide();
          break;
        default:
          break;
      }
    }
  };

  const handleDelete = () => {
    if (currentNumber > currentNumber[0]) {
      setCurrentNumber(currentNumber.slice(0, -1));
    } else {
      setCurrentNumber("0");
    }
  };

  const toggleSignal = () => {
    setCurrentNumber((prevValue) => {
      if (prevValue === "0") {
        return prevValue;
      }
      if (prevValue.startsWith("-")) {
        return prevValue.substring(1);
      } else {
        return `-${prevValue}`;
      }
    });
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setEnteredNumber("0");
    setOperation("");
  };

  return (
    <Style.Container>
      <Style.Calc>
        <Display currentNumber={currentNumber} />
        <Keyboard
          handleAddNumber={handleAddNumber}
          handleSum={handleSum}
          handleMinus={handleMinus}
          handleMultiply={handleMultiply}
          handleDivide={handleDivide}
          handleEqual={handleEqual}
          handleDelete={handleDelete}
          toggleSignal={toggleSignal}
          handleClear={handleClear}
        />
      </Style.Calc>
    </Style.Container>
  );
};

export default Calculator;
