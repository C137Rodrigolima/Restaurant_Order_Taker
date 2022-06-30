import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  background-color: #F1F1F1;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;

  background-color: #54030B;
`;

const Menu = styled.div`
  width: 700px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 36px;
    color: #ffffff;
    word-wrap: wrap;
  }
  img{
    width: 50px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
  }
  .exit-icon{
    :hover{
      cursor: pointer;
    }
  }

  @media (max-width: 755px){
    width: 100%;
  }
  @media (max-width: 550px){
    width: 100%;
    h1{font-size: 30px;}
  }
`;

const OptionsContainer = styled.div`
  width: 700px;
  padding: 120px 0px 55px;

  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;

  gap: 10px;

  h2{
    height: 30px;
    font-size: 22px;
    font-weight: bold;
  }

  @media (max-width: 705px){
    width: 100%;
  }
`;

const TableBox = styled.div`
  height: 150px;
  width: 100px;
  font-size: 68px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-right: 2px #BBBBBB solid;

  h1{
    font-size: 22px;
    font-weight: bold;
  }
`;

const OptionBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 5px;
  
  border-radius: 5px;

  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

  h1{
    font-size: 22px;
    font-weight: bold;
  }
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