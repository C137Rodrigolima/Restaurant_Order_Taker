import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export default function Main(){
  const [options, setOptions] = useState([]);
  const [order, setOrder] = useState([]);

  async function getOptions(){
    const {data} = await api.get();
    setOptions(data);
  }

  async function handleOption(id){
    if(order.includes(id)){
      const arr = order
      .filter((option)=> {return option !== id});
      setOrder(arr);
      return
    }
    setOrder([...order, order.push(id)]);
  }

  useEffect(()=>{
    getOptions();
  }, [])

  if(setOptions.length === 0){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Main</div>
      <Link to={"/signup"}>Register</Link>
      {
        options.map((option)=> 
          <div key={option.id}>
            {option.name}
            <button onClick={() => handleOption(option.id)}>
              Pedir
            </button>
          </div>
        )
      }
    </>
  );
}
