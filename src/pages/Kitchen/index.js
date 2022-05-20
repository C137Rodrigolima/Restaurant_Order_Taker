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
  
  socket.on("new_order_arrived", ()=>{
    update();
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

  function update(){
    setReload(!reload);
  }

  if(orders.length === 0){
    return (
      <>
        <div>Waiting new orders...</div>
      </>
    )
  }

  return(
    <>
    <button onClick={()=> logout()}>Logout</button>
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