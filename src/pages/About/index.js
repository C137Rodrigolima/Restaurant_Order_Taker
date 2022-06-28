import Bottom from "../../Components/Bottom";
import useAuth from "../../hooks/useAuth";
import { Container, Menu, Nav, StyledLink, ContentBox } from "./style";
import Logo_ROT from "../../Assets/LOGO_R_O_T.png";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function About(){
  const navigate = useNavigate();
  const {token, signOut} = useAuth();

  return (
    <Container>
      <Nav>
        <Menu>
          <img src={Logo_ROT} />
          <h1 onClick={()=> navigate('/')}>Carlos's Restaurante</h1>
          { token? 
            <span className="exit-icon" onClick={()=> signOut()}>
            <RiLogoutBoxRLine color="white" size={30} />
          </span>
            :
            <div>
              <StyledLink to={"/signin"}>Login Usuário</StyledLink>
              <StyledLink to={"/adm/signin"}>Login Adm</StyledLink>
            </div>
          }
        </Menu>
      </Nav>
      
      <ContentBox>
        <h1>Qual o objetivo deste site:</h1>
        <h2>
          Este site é um anotador de pedidos para um restaurante com páginas de cliente e administrador.</h2>
        <br />
        <h2>
          Foi construído com o objetivo de conectar diretamente os pedidos das mesas a cozinha do restaurante.
          Possibilita um acesso rápido aos pedidos por parte dos cozinheiros e uma resposta igualmente rápida para os clientes.
        </h2>
      </ContentBox>

      <Bottom />
    </Container>
  );
}
