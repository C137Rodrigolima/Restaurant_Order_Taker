import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #400102;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;

  background-color: #00131c;
`;

const Menu = styled.div`
  width: 700px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 36px;
    color: #ffffff;
  }
  h2{
    color: #ffffff;
  }
  @media (max-width: 700px){
    width: 100%;
  }
`;

const OptionsContainer = styled.div`
  width: 500px;
  padding: 75px 0px 25px;

  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;

  gap: 10px;

  h2{
    color: #ffffff;
    font-size: 22px;

  }

  @media (max-width: 505px){
    width: 100%;
  }
`;

const TableBox = styled.div`
  height: 120px;
  width: 100px;
  font-size: 68px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionBox = styled.div`
  width: 500px;

  display: flex;
  justify-content: space-between;
  gap: 5px;
  
  border-radius: 5px;

  background-color: #ffffff;
  box-sizing: border-box;

  @media (max-width: 505px){
    width: 100%;
    border-radius: 0px;
  }
`;

const OptionsContent = styled.div`
  width: 50%;
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button`
  all: unset;
  :hover {
    cursor: pointer;
    width: 105px;
  }
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  background: #00131c;
  
  box-sizing: border-box;
  
  border-radius: 0px 5px 5px 0px;
`;

export {
    Container,
    Nav,
    Menu,
    OptionsContainer,
    TableBox,
    OptionBox,
    OptionsContent,
    OptionButton
}