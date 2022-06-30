import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom";
import { Container, Menu, Nav, OptionBox, OptionsContainer, OptionsContent } from "./style";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Bottom from "../../Components/Bottom";
import Logo_ROT from "../../Assets/LOGO_R_O_T.png";


const socket = io.connect(BASE_URL);

export default function WaitPage(){
  const navigate = useNavigate();
  const {token, signOut} = useAuth();
  const [order, setOrder] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(()=> {
    getOrder();  
  }, [token]);

  async function getOrder(){
    const promise = api.getOrder(token);

    promise.then((response) => {
      const totalPrice = calcPrice(response.data.optionOrder);
      setPrice(totalPrice);
      setOrder(response.data);
      socket.emit("join_table", response.data.table);
    }).catch ((error)=> {
      console.log(error);
      alert("Could not show order informations, hold on.")
    })
  };

  function calcPrice(orders){
    let total = 0;
    for(let i=0; i<orders.length; i++){
      total += parseFloat(orders[i].option.price);
    }
    return total;
  }

  socket.on("Order_Coming", (data)=>{
    confirmAndLogout(data);
  })

  function confirmAndLogout(data){
    if(data.table === order.table){
      releaseLogout()
    }
  }

  function releaseLogout(){
    signOut();
    navigate("/")
  }

  if(!order.table){
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Nav>
        <Menu>
        <img src={Logo_ROT} />
        <h1>Carlos's Restaurante</h1>
        <span className="exit-icon" onClick={()=> releaseLogout()}>
          <RiLogoutBoxRLine color="white" size={30} />
        </span>
        </Menu>
      </Nav>
      
      <OptionsContainer>
        <h1>Avisaremos por aqui quando estiver pronto ;)</h1>
        <h2>Sua mesa: <b>{order.table}</b></h2>
        <h2>Seu Pedido:</h2>
        {
          order.optionOrder.map((each) =>
          <OptionBox key={each.option.id}>
            <img src={each.option.image} alt={each.option.name}/>
            <OptionsContent>{each.option.name}</OptionsContent>
          </OptionBox>
          )
        }
        <h3><b>Total: </b>R$ {price.toFixed(2).toString().replace(".", ",")}</h3>
      </OptionsContainer>
      <Bottom />
    </Container>
  );
}
