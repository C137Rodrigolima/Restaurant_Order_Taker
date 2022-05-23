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
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 36px;
    color: #ffffff;
    word-wrap: wrap;
  }

  @media (max-width: 555px){
    width: 100%;
    h1{font-size: 30px;}
  }
  @media (max-width: 505px){
    width: 100%;
    h1{font-size: 22px;}
  }
`;

const FormContainer = styled.form`
  width: 500px;
  margin: 25px 5px;
  position: relative;

  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  border: 1px white solid;
  box-sizing: border-box;
  input{
    all: unset;
    width: 50%;

    border-radius: 3px 0px 0px 3px;
    background-color: #ffffff;
    ::placeholder{
      padding-left: 5px;
      color: #00131c;
    }
  }
  button{
    :hover {
    cursor: pointer;
    width: 55%;
    }
    all: unset;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    border-radius: 0px 3px 3px 0px;
    background-color: #00131c;
  }

  @media (max-width: 505px){
    width: 100%;
    border-radius: 0px;
  }
`;

const Tables = styled.div`
  top: 100%;
  width: 50%;
  position: absolute;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
`;

const Table = styled.div`
  padding: 3px 0px;
  display: flex;
  justify-content: center;
`;

const OptionsContainer = styled.div`
  width: 500px;
  padding: 150px 0px 25px;

  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;

  gap: 10px;

  h1{
    color: #ffffff;
    font-size: 22px;

  }

  @media (max-width: 505px){
    width: 100%
  }
`;

const OptionBox = styled.div`
  width: 500px;
  height: 120px;

  display: flex;
  justify-content: space-between;

  
  border-radius: 5px;

  background-color: #ffffff;
  box-sizing: border-box;
  img {
    object-fit: cover;
    width: 120px;
    border-radius: 5px 0px 0px 5px;
  }
  @media (max-width: 505px){
    width: 100%;
    border-radius: 0px;
    img{
      border-radius: 0px;
    }
  }
`;

const OptionsContent = styled.div`
  width: 50%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;

  h2{
    font-size: 18px;
    font-weight: bold;
  }

  h3{
    text-align: right;
    font-size: 22px;
    font-weight: bold;
    color: green;
  }
  @media (max-width: 505px){
    h2, h3 {
      font-size: 15px;
    }
  }
`;

const OptionButton = styled.button`
  all: unset;
  :hover {
    cursor: pointer;
    width: 125px;
  }
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  background: ${({IsTheChosenOne})=> IsTheChosenOne? "green" : "#1976D2"};
  border-radius: 0px 5px 5px 0px;
  box-sizing: border-box;

  @media (max-width: 505px){
    border-radius: 0px;
  }
`;

export {
    Container,
    Nav,
    Menu,
    FormContainer,
    Tables,
    Table,
    OptionsContainer,
    OptionBox,
    OptionsContent,
    OptionButton
}