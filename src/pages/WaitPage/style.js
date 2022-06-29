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
    h1{font-size: 30px;}
  }
  @media (max-width: 550px){
    width: 100%;
    h1{font-size: 22px;}
  }
`;

const OptionsContainer = styled.div`
  width: 700px;
  padding: 120px 0px 55px;

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
    font-weight: bold;
  }
  b{
    font-size: 26px;
    color: red;
  }
  h3{
    font-size: 22px;
    color: green;
    b{
    font-size: 22px;
    font-weight: bold;
    color: #111111;
    }
  }

  @media (max-width: 705px){
    width: 100%;
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
    width: 300px;
    border-radius: 5px 0px 0px 5px;
  }
  @media (max-width: 705px){
    width: 100%;
    height: 120px;
    border-radius: 0px;
    img{
      width: 50vw;
      height: 120px;
      border-radius: 0px;
    }
  }
`;

const OptionsContent = styled.div`
  width: 50%;
  padding: 5px;

  display: flex;

  box-sizing: border-box;

  font-size: 18px;
  font-weight: bold;

  h3{
    font-size: 22px;
    font-weight: bold;
    color: green;
  }
`;

export {
    Container,
    Nav,
    Menu,
    OptionsContainer,
    OptionBox,
    OptionsContent
}