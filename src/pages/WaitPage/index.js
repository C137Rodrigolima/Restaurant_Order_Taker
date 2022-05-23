import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom";
import { Container, Menu, Nav, OptionBox, OptionsContainer, OptionsContent } from "./style";

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
    if(data){
      console.log("teste");
      // socket.emit("new_order");
      releaseLogout();
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
        <h1>Avisaremos por aqui quando estiver pronto :)</h1>
        </Menu>
      </Nav>
      
      <OptionsContainer>
      <h2>{`Sua mesa: ${order.table}`}</h2>
      <h2>Seu Pedido:</h2>
      {
        order.optionOrder.map((each) =>
        <OptionBox key={each.option.id}>
          <img src={each.option.image} alt={each.option.name}/>
          <OptionsContent>{each.option.name}</OptionsContent>
        </OptionBox>
        )
      }
      <h2>{`Total: R$ ${price.toString().replace(".", ",")}`}</h2>
      </OptionsContainer>
    </Container>
  );
}
