import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { 
  Container,
  FormContainer,
  Title,
  Input,
  InteractBox,
  Button,
  StyledLink
} from "../../FormComponents";
import useAuth from "../../hooks/useAuth";
import { api } from "../../services/api";

export default function SignIn(){
  const navigate = useNavigate();
  const {token, persistToken} = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setDisabled(true);
    try {
      const { data } = await api.login({ ...formData });
      
      persistToken(data);
      setDisabled(false);
      navigate("/");
    } catch (error) {
        console.log(error);
        alert("Could not login. Try later.");
        setDisabled(false);
    }
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input 
          placeholder="E-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input 
          placeholder="Senha"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <InteractBox>
          <StyledLink to={"/signup"}>First time? Create an account!</StyledLink>
          <Button disabled={disabled}>LOGIN</Button>
        </InteractBox>
      </FormContainer>
    </Container>
  )
}