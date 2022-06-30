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
          Este site tem o objetivo de fornecer uma resposta rápida para os pedidos dos clientes, 
          uma necessidade em dobro para a cozinha de um restaurante, 
          cuja cobrança por velocidade faz contar cada minuto.
        </h2>
        <h2>
          Ao utilizar esse site o restaurante pode automatizar a experiência do usuário ao anotar seus 
          pedidos, evitando erros e garantindo uma resposta mais rápida, 
          alertando imediatamente a cozinha dos pedidos por mesa.
        </h2>
        <br />
        <h1>Para testar:</h1>
        <h2>Abra uma guia no login de usuário e outra como administrador, para testar a conexão entre a cozinha e as mesas ;)</h2>
        <h2>Você pode criar um registro como cliente e seguir o as informações de cadastro abaixo para login como Adm:</h2>
        <h3>
          <b>AdmEmail:</b> kitchenadm@email.com
        </h3>
        <h3>
          <b>AdmSenha:</b> adm.
        </h3>
        <br />
        <h2>
          Visite o perfil no github, onde o projeto está pinado e leia o Read.me do projeto para saber como rodar na sua máquina ;)
        </h2>
      </ContentBox>

      <Bottom />
    </Container>
  );
}
