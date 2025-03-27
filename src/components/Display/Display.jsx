import * as Style from "./Display.styles";

const Display = ({ currentNumber }) => {
  return (
    <Style.Container>
      <Style.Content>{currentNumber}</Style.Content>
    </Style.Container>
  );
};

export default Display;
