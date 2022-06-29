import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { api, BASE_URL } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Container, FormContainer, Menu, Nav, StyledLink, OptionBox, OptionButton, OptionsContainer, OptionsContent, Table, Tables } from "./style";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import Bottom from "../../Components/Bottom";
import Logo_ROT from "../../Assets/LOGO_R_O_T.png";

const socket = io(BASE_URL);

export default function Main(){
  const {token, signOut} = useAuth();
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
      navigate("/waiting-order");
    } catch (error) {
      console.log(error);
      alert("could not place order. Try again");
    }
  }

  function confirmAction() {
    let confirmaction = window
    .confirm("Not logged yet, pls do Log in before ;)");

    if (confirmaction) {
      setDisabled(false);
      navigate("/signin");
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
          <img src={Logo_ROT} />
          <h1>Carlos's Restaurante</h1>
          { token? 
            <span className="exit-icon" onClick={()=> signOut()}>
              <RiLogoutBoxRLine color="white" size={30} />
            </span>
            :
            <div>
              <StyledLink to={"/signin"}>Login Usuário</StyledLink>
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
        <h1>Atendente de Pedidos do Restaurante</h1>
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

      <Bottom />
    </Container>
  );
}
