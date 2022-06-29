import { useEffect, useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import useAuth from "../../hooks/useAuth";
import { api, BASE_URL } from "../../services/api";
import { Container, Menu, Nav, OptionBox, OptionButton, OptionsContainer, OptionsContent, TableBox } from "./style";
import Logo_ROT from "../../Assets/LOGO_R_O_T.png";
import Bottom from "../../Components/Bottom";


const socket = io.connect(BASE_URL);

export default function Kitchen(){
  const navigate = useNavigate();
  const {admToken, signOutAdm} = useAuth();
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  function getOrders(){
    const promise = api.getAllOrders(admToken);

    promise.then((response) =>{
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
    signOutAdm();
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
        <img src={Logo_ROT} />
        <h1>Carlos's Cozinha</h1>
        <span className="exit-icon" onClick={()=> logout()}>
          <RiLogoutBoxRLine color="white" size={30} />
        </span>
        </Menu>
      </Nav>
      <OptionsContainer>
        <h2>Pedidos dos Clientes:</h2>
      {orders.map((order)=>
        <OptionBox key={order.id}>
          <TableBox>
            <h1>Mesa:</h1>
            {order.table}
          </TableBox>
          <OptionsContent>
            <h1>Pedido:</h1>
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
      <Bottom />
    </Container>
  );
}