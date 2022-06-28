import styled from "styled-components";

const AboutBox = styled.div`
  width: 100%;
  padding: 20px 30px 4px 30px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;

  border-top: 1px #DDDDDD solid;

  h1{
    :hover{
      cursor: pointer;
    }
  }
  .links{
    display: flex;
    gap: 10px;
  }

  a{
    :hover{
      cursor: pointer;
    }
    all: unset;
  }
`;

export {
  AboutBox,
}