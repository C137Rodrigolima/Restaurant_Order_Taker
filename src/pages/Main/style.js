import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  
  color: #ffffff;
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
    h1{font-size: 30px;}
  }
  @media (max-width: 550px){
    width: 100%;
    h1{font-size: 22px;}
  }
`;

const FormContainer = styled.form`
  width: 550px;
  height: 35px;
  margin: 25px 5px;
  position: relative;

  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  border: 1px white solid;
  box-sizing: border-box;

  input{
    :hover {
    cursor: pointer;
    }
    all: unset;
    width: 50%;

    text-align: center;
    font-weight: bold;

    border-radius: 3px 0px 0px 3px;
    background-color: #ffffff;
    ::placeholder{
      padding-left: 5px;
      font-weight: lighter;
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

  @media (max-width: 705px){
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
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;
`;

const Table = styled.div`
  :hover {
    cursor: pointer;
  }
  width: 100%;
  padding: 3px 0px;

  display: flex;
  justify-content: center;
  font-weight: bold;
  background-color: #DDDDDD;
`;

const OptionsContainer = styled.div`
  width: 700px;
  padding: 170px 0px 55px;

  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;

  gap: 20px;

  h1{
    font-size: 22px;

  }

  @media (max-width: 705px){
    width: 100%;
    padding: 180px 0px 55px;
  }
`;

const OptionBox = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: space-between;

  
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  background-color: #ffffff;
  box-sizing: border-box;
  img {
    object-fit: cover;
    width: 180px;
    border-radius: 5px 0px 0px 5px;
  }
  @media (max-width: 705px){
    width: 100%;
    height: 120px;
    border-radius: 0px;
    img{
      width: 120px;
      height: 120px;
      border-radius: 0px;
    }
  }
`;

const OptionsContent = styled.div`
  width: 50%;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;

  h2{
    font-size: 18px;
  }

  h3{
    font-size: 22px;
    font-weight: bold;
    color: green;
  }
  @media (max-width: 505px){
    width: 150px;
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
  StyledLink,
  Menu,
  FormContainer,
  Tables,
  Table,
  OptionsContainer,
  OptionBox,
  OptionsContent,
  OptionButton,
}