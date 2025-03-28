import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 96%;
  height: 300px;
  justify-content: center;
  align-items: center;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 55px;
    color: white;
    background-color: #5f5f5f;
    margin: 2px;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background-color: #4a4a4a;
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Numeric = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

export const Operations = styled.div`
  display: flex;
  flex-direction: column;
`;
