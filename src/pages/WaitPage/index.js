import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "../../services/api";


const socket = io(BASE_URL);

export default function WaitPage(){
  const [ready, setReady] = useState(false);

  // useEffect(()=> {
  //   socket.on("Done-Order", (data)=>{
  //     setReady(true);
  //     releaseLogout();
  //   });
  // }, [socket]);

  // function releaseLogout(){

  // }

  return (
    <>
      <div>Seu Pedido</div>
      <div>Avisaremos por aqui quando estiver pronto :)</div>
    </>
  );
}
