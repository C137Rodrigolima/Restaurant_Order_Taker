import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import { api, BASE_URL } from "../../services/api";
import { Container, Menu, Nav, OptionBox, OptionButton, OptionsContainer, OptionsContent, TableBox } from "./style";

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
      <Container>
        <Nav>
          <Menu>
            <h1>Esperando pedidos</h1>
          </Menu>
        </Nav>
        <OptionsContainer>
          <h2>Pedidos dos Clientes:</h2>
        </OptionsContainer>
      </Container>
    )
  }

  return(
    <Container>
      <Nav>
        <Menu>
          <div></div>
          <h1>Cozinha</h1>
          <h2 onClick={()=>logout()}>Sair</h2>
        </Menu>
      </Nav>
      <OptionsContainer>
        <h2>Pedidos dos Clientes:</h2>
      {orders.map((order)=>
        <OptionBox key={order.id}>
          <TableBox>{order.table}</TableBox>
          <OptionsContent>
            Pratos:
          {order.optionOrder.map((each) =>
            <li key={each.option.id}>
              {each.option.name}
            </li>
          )}
          </OptionsContent>
          <OptionButton onClick={()=> handleOrder(order.table, order.id)}>
            Pronto
          </OptionButton>
        </OptionBox>
      )}
      </OptionsContainer>
    </Container>
  );
}