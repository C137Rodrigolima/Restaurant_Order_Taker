import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth.js"
import { useNavigate } from "react-router-dom";

const socket = io.connect(BASE_URL);

export default function WaitPage(){
  const navigate = useNavigate();
  const {token, signOut} = useAuth();
  const [order, setOrder] = useState({});

  async function getOrder(){
    const promise = api.getOrder(token);

    promise.then((response) => {
      setOrder(response.data);
      socket.emit("join_table", response.data.table);
    }).catch ((error)=> {
      console.log(error);
      alert("Could not show order informations, hold on.")
    })
  };

  useEffect(()=> {
    getOrder();  
  }, [token]);

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
