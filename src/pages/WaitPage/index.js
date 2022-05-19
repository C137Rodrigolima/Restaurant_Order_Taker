import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth.js"

const socket = io.connect(BASE_URL);

export default function WaitPage(){
  const {token, signOut} = useAuth();
  const [order, setOrder] = useState({});

  async function getOrder(){
    try {
      const response = await api.getOrder(token);
      setOrder(response.data);
      //SOCKET LOGO BEM AQUI, É SÓ OLHAR
      socket.emit("join_table", response.data.table);
    } catch (error) {
      console.log(error);
      alert("Could not get Order.")
    }
  };

  //Entrando aqui, dentro da getOrder fazer um emit pra join_table, entrando na sala;
  //Ao receber o socket.on "Order_Coming" abrir uma função confirmFinish:
  // ela deve mostrar o retângulo de Recebido com um icone Check-Verde e botão "OK" ir para a login Page;

  function confirmAndLogout(data){
    console.log(data);
    if(data){
      alert("Seu pedido está a caminho! Faremos LogOut para você");
      releaseLogout();
    }
  }

  useEffect(()=> {
    getOrder();  
  }, [token]);

  function releaseLogout(){
    signOut();
  }

  socket.on("Order_Coming", (data)=>{
    confirmAndLogout(data);
  })

  if(!order.table){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Seu Pedido</div>
      <div>Avisaremos por aqui quando estiver pronto :)</div>
      <div>{`Client Table: ${order.table}`}</div>
      {
        order.optionOrder.map((each) =>
        <div key={each.option.id}>
          <div>{each.option.name}</div>
          <img src={each.option.image} height={"50px"} width={"50px"}/>

        </div>
        )
      }
    </>
  );
}
