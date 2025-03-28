import * as Style from "./Keyboard.styles";
import BackspaceIcon from "@mui/icons-material/Backspace";

const Keyboard = ({
  handleAddNumber,
  handleSum,
  handleMinus,
  handleMultiply,
  handleDivide,
  handleEqual,
  handleDelete,
  handleClear,
  toggleSignal,
  handlePercentage,
}) => {
  return (
    <Style.Container>
      <Style.Content>
        <Style.Numeric>
          <Style.Row>
            <div className="item" onClick={handlePercentage}>
              %
            </div>
            <div className="item" onClick={handleClear}>
              C
            </div>
            <div className="item" onClick={handleDelete}>
              <BackspaceIcon />
            </div>
          </Style.Row>
          <Style.Row>
            <div className="item" onClick={() => handleAddNumber("7")}>
              7
            </div>
            <div className="item" onClick={() => handleAddNumber("8")}>
              8
            </div>
            <div className="item" onClick={() => handleAddNumber("9")}>
              9
            </div>
          </Style.Row>
          <Style.Row>
            <div className="item" onClick={() => handleAddNumber("4")}>
              4
            </div>
            <div className="item" onClick={() => handleAddNumber("5")}>
              5
            </div>
            <div className="item" onClick={() => handleAddNumber("6")}>
              6
            </div>
          </Style.Row>
          <Style.Row>
            <div className="item" onClick={() => handleAddNumber("1")}>
              1
            </div>
            <div className="item" onClick={() => handleAddNumber("2")}>
              2
            </div>
            <div className="item" onClick={() => handleAddNumber("3")}>
              3
            </div>
          </Style.Row>
          <Style.Row>
            <div className="item" onClick={toggleSignal}>
              +/-
            </div>
            <div className="item" onClick={() => handleAddNumber("0")}>
              0
            </div>
            <div className="item" onClick={() => handleAddNumber(".")}>
              .
            </div>
          </Style.Row>
        </Style.Numeric>
        <Style.Operations>
          <div className="item" onClick={handleDivide}>
            /
          </div>
          <div className="item" onClick={handleMultiply}>
            x
          </div>
          <div className="item" onClick={handleMinus}>
            -
          </div>
          <div className="item" onClick={handleSum}>
            +
          </div>
          <div className="item" onClick={handleEqual}>
            =
          </div>
        </Style.Operations>
      </Style.Content>
    </Style.Container>
  );
};

export default Keyboard;
