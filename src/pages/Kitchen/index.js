import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import { api, BASE_URL } from "../../services/api";

const socket = io.connect(BASE_URL);

export default function Kitchen(){
  const navigate = useNavigate();
  const {admToken, signOut} = useAuth();
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  function getOrders(){
    const promise = api.getAllOrders(admToken);

    promise.then((response) =>{
      console.log(response.data);
      socket.emit('join_table', ["A", "B", "C", "D", "E"])
      setOrders(response.data);
    }).catch ((error) => {
      console.log(error);
      alert("Could not find orders");
    })
  }
  //SALVAR  os pedidos em um objeto e só atualizaro objeto adicionando os novos pedidos, igual uma mensagem nova...
  //ver como fazer isso considerando que tem que ficar no banco também, como a mensagem fica salva para o Indiano;
  
  socket.on("new_order_arrived", ()=>{
    const test = reload;
    setReload(!test);
  })

  useEffect(()=>{
    getOrders();
  }, [reload]);

  function handleOrder(table, orderId){
    socket.emit("Finish_Order", {
      table: table, orderId: orderId
    });
  }

  function logout(){
    signOut();
    navigate("/adm/signin");
  }

  if(orders.length === 0){
    return (
      <>
        <div>Waiting...</div>
      </>
    )
  }

  return(
    <>
    <button onClick={()=> logout()}>Logout</button>
    <button onClick={()=> console.log("vendo se faz console")}>Teste do ADM</button>
    <div>Kitchen</div>
    <div>Client's Orders:</div>
    {
    orders.map((order)=>
      <>
      <div key={order.id}>
        {order.optionOrder[0].option.name}
        <button onClick={()=> handleOrder(order.table, order.id)}>SendTest</button>
      </div>
      <br />
      </>
    )
    }
    </>
  );
}