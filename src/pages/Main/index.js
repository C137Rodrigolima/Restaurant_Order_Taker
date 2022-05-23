import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { StyledLink } from "../../FormComponents";
import { Container, FormContainer, Menu, Nav, OptionBox, OptionButton, OptionsContainer, OptionsContent, Table, Tables } from "./style";
import { BiCheck } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

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
      const allOptions = buttonsHandler(response.data);
      setOptions(allOptions);
    }).catch ((error)=> {
      console.log(error);
      alert("Could not load options");
    })
  }

  function buttonsHandler(allOptions){
    allOptions.forEach(element => {
      element.chosenOne = false;
    });
    return allOptions;
  }

  async function handleOption(id){
    let newArr = options.map((each)=>{
      if(each.id === id) {
        each.chosenOne = !each.chosenOne;
        return each;
      } else {
        return each
      }
    })
    setOptions(newArr);
    
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
      <Nav>
        <Menu>
          <div></div>
          <h1>Atendente de Pedidos do Restaurante</h1>
          { token? 
            <div></div>
            :
            <div>
              <StyledLink to={"/"}>Login Usuário</StyledLink>
              <StyledLink to={"/adm/signin"}>Login Adm</StyledLink>
            </div>
          }
        </Menu>
        <FormContainer onSubmit={(e)=>submitOrder(e)}>
          <input 
            autoComplete="off"
            placeholder="Sua Mesa"
            type="text"
            onChange={()=>{}}
            onClick={() => setOpenTable(!openTable)}
            name="category"
            value={clientTable}
            required
          />
          { 
          openTable?
          <Tables>
            {
              allTables.map((table) =>
                <Table key={table} onClick={()=> handleTable(table)}>
                  {table}
                </Table>
              )
            }
          </Tables>
          :
          <></>
          }
          <button type="submit" disabled={disabled}>Enviar Pedido</button>
        </FormContainer>
      </Nav>
      
      <OptionsContainer>
        <h1>Menu</h1>
      {
        options.map((option)=> 
          <OptionBox key={option.id}>
            <img src={option.image} alt={option.name}/>
            <OptionsContent>
              <h2>{option.name}</h2>
              <h3>{`R$ ${option.price.replace('.', ',')}`}</h3>
            </OptionsContent>
            <OptionButton
            IsTheChosenOne={option.chosenOne}
            onClick={() => handleOption(option.id)}>
              {option.chosenOne?
                <BiCheck size={35}/>
                :
                <BiPlus size={30}/>
              }
            </OptionButton>
          </OptionBox>
        )
      }
      </OptionsContainer>
    </Container>
  );
}
