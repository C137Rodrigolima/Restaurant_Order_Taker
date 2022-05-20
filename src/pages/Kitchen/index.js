import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import { api, BASE_URL } from "../../services/api";
import { Container, OptionBox, OptionsContainer } from "./style";

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
    <Container>
    <h1>Kitchen</h1>
    <h1>Client's Orders:</h1>
    {
    orders.map((order)=>
      <>
      <OptionsContainer key={order.id}>
        <div>{`Table: ${order.table}`}</div>
        <button onClick={()=> handleOrder(order.table, order.id)}>Order Done</button>
        {order.optionOrder.map((each) =>
        <OptionBox>
          {each.option.name}
        </OptionBox>
        )
        }
      </OptionsContainer>
      </>
    )
    }
    </Container>
  );
}