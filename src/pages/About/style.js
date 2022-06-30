import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
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
    :hover{
      cursor: pointer;
    }
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

const ContentBox = styled.div`
  width: 700px;
  padding: 100px 0px 55px;

  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;

  gap: 20px;

  h1{
    font-size: 24px;
    font-weight: bold;
  }
  h2{
    font-size: 22px;
    line-height: 29px;
  }
  h3{
    font-size: 18px;
    line-height: 20px;
    b{
      font-weight: bold;
    }
  }

  @media (max-width: 705px){
    width: 100%;
  }
  @media (max-width: 400px){
    width: 100%;
    padding: 150px 0px 25px;
  }
`;

export {
  Container,
  Nav,
  StyledLink,
  Menu,
  ContentBox
}