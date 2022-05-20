import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
`;

const FormContainer = styled.form`
  width: 660px;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionsContainer = styled.div`
  width: 660px;
  padding-top: 50px;
`;

const OptionBox = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
`;

const OptionButton = styled.button`
  width: 50px;
  height: 50px;
`;

export {
    Container,
    Menu,
    FormContainer,
    Table,
    OptionsContainer,
    OptionBox,
    OptionButton
}