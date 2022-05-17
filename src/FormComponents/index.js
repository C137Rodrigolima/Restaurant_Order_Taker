import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

const FormContainer = styled.form`
  width: 465px;
  padding-top: 55px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 470px) {
    width: 100%;
  }
`

const Logo = styled.div`
  width: 291px;
  height: 64px;
  margin-bottom: 180px;

  display: flex;
  justify-content: center;

  @media (max-width: 300px) {
    width: 100%;
    margin-bottom: 120px;
    img{
      width: 240px;
      height: 50px;
    }
  }
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`

const Input = styled.input`
  all: unset;
  height: 40px;
  width: 100%;
  padding-left: 5px;
  background: #ffffff;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border: solid 1px #C4C4C4;
  box-sizing: border-box;

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: left;
    color: #9f9f9f;
  }
`

const InteractBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  all: unset;
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  background: #1976D2;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`

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
  
  color: rgba(70, 115, 202, 0.8);
`;

export { 
  Container,
  FormContainer,
  Logo,
  Title,
  Input,
  InteractBox,
  Button,
  StyledLink
};