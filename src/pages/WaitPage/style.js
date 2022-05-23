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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 36px;
    color: #ffffff;
  }
  @media (max-width: 680px){
    width: 100%;
    h1{font-size: 30px;}
  }
  @media (max-width: 550px){
    width: 100%;
    h1{font-size: 22px;}
  }
`;

const OptionsContainer = styled.div`
  width: 500px;
  padding: 100px 0px 25px;

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

const OptionBox = styled.div`
  width: 500px;
  height: 120px;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  
  border-radius: 5px;

  background-color: #ffffff;
  box-sizing: border-box;
  img {
    object-fit: cover;
    width: 300px;
    border-radius: 5px 0px 0px 5px;
  }

  @media (max-width: 505px){
    width: 100%;
    border-radius: 0px;
    img{
      width: 50vw;
      border-radius: 0px;
    }
  }
`;

const OptionsContent = styled.div`
  right: 0px;
  bottom: 0px;
  padding: 10px;

  position: absolute;
  z-index: 1;
  
  font-size: 18px;
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;


`;

export {
    Container,
    Nav,
    Menu,
    OptionsContainer,
    OptionBox,
    OptionsContent
}