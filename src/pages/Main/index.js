import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { StyledLink } from "../../FormComponents";
import { Container, FormContainer, Menu, OptionBox, OptionButton, OptionsContainer, Table } from "./style";

const socket = io(BASE_URL);

export default function Main(){
  const {token} = useAuth();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [options, setOptions] = useState([]);
  const [order, setOrder] = useState([]);
  const [openTable, setOpenTable] = useState(false);
  const [allTables] = useState([
    "A", "B", "C", "D", "E"
  ])
  const [clientTable, setClientTable] = useState("");

  useEffect(()=> getOptions(), [token]);

  function getOptions(){
    const promise = api.get();
    
    promise.then((response)=>{
      console.log(response.data);
      setOptions(response.data);
    }).catch ((error)=> {
      console.log(error);
      alert("Could not load options");
    })
  }

  async function handleOption(id){
    if(order.includes(id)){
      const arr = order.filter((item) => {
        return item !== id
      })
      setOrder(arr);
      return
    }
    let arr = [...order];
    arr.push(id);
    setOrder([...arr]);
  }

  function handleTable(table){
    setClientTable(table);
    setOpenTable(!openTable);
  }

  async function submitOrder(e){
    e.preventDefault();
    setDisabled(true);

    if(order.length === 0){
      alert("Make some choices from Menu ;)");
      setDisabled(false);
      return;
    }
    if(!token){
      confirmAction();
      return;
    }
    try {
      await api.postOrder({
      table: clientTable,
      optionsIds: order
      }, token);
      socket.emit("new_order");
      navigate("/menu/waiting");
    } catch (error) {
      console.log(error);
      alert("could not place order. Try again");
    }
  }

  function confirmAction() {
    let confirmAction = window
    .confirm("Not logged yet, pls do Log in before ;)");

    if (confirmAction) {
      setDisabled(false);
      navigate("/");
    }
    setDisabled(false);
    return;
  }

  if(options.length === 0){
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Menu>
        <div></div>
        <h1>Menu</h1>
        <div>
          <StyledLink to={"/"}>User-Login</StyledLink>
          <StyledLink to={"/adm/signin"}>Adm-login</StyledLink>
        </div>
      </Menu>
      <FormContainer onSubmit={(e)=>submitOrder(e)}>
        <input 
          autoComplete="off"
          placeholder="Your Table"
          type="text"
          onChange={()=>{}}
          onClick={() => setOpenTable(!openTable)}
          name="category"
          value={clientTable}
          required
        />
        { 
        openTable?
        <div>
          {
            allTables.map((table) =>
              <Table key={table} onClick={()=> handleTable(table)}>
                {table}
              </Table>
            )
          }
        </div>
        :
        <></>
        }
        <button type="submit" disabled={disabled}>Send Order</button>
      </FormContainer>
      <OptionsContainer>
      {
        options.map((option)=> 
          <OptionBox key={option.id}>
            <OptionButton onClick={() => handleOption(option.id)}>
              {`Pedir ${option.id}`}
            </OptionButton>
            <img src={option.image} height={"50px"} width={"50px"}/>
            <h2>{option.name}</h2>
          </OptionBox>
        )
      }
      </OptionsContainer>
    </Container>
  );
}
