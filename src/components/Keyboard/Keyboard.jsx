import * as Style from "./Keyboard.styles";
import BackspaceIcon from "@mui/icons-material/Backspace";

const Keyboard = ({ operation }) => {
  return (
    <Style.Container>
      <Style.Content>
        <Style.Numeric>
          <Style.Line>
            <div className="item">%</div>
            <div className="item">C</div>
            <div className="item">
              <BackspaceIcon />
            </div>
          </Style.Line>
          <Style.Line>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
          </Style.Line>
          <Style.Line>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
          </Style.Line>
          <Style.Line>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
          </Style.Line>
          <Style.Line>
            <div className="item">+/-</div>
            <div className="item">0</div>
            <div className="item">.</div>
          </Style.Line>
        </Style.Numeric>
        <Style.Operations>
          <div className="item">/</div>
          <div className="item">x</div>
          <div className="item">-</div>
          <div className="item">+</div>
          <div className="item">=</div>
        </Style.Operations>
      </Style.Content>
    </Style.Container>
  );
};

export default Keyboard;
