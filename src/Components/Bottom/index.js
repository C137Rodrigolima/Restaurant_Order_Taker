import { useNavigate } from "react-router-dom";
import { AboutBox } from "./style";

export default function Bottom(){
  const navigate = useNavigate();

  return (
    <AboutBox>
      <h1 onClick={()=> navigate('/about')}>
        Sobre
      </h1>
      <div className="links">
      <a href="https://www.linkedin.com/in/carlos-rodrigo-b-lima/" target={"_blank"} >LinkedIn</a>
      <a href="https://github.com/C137Rodrigolima" target={"_blank"} >GitHub</a>
      </div>
    </AboutBox>
  );
}
