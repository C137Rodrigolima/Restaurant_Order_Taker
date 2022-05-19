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

export default function AdmSignIn(){
  const navigate = useNavigate();
  const {admToken, persistAdmToken} = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{
    if(admToken){
      navigate("/adm/kitchen")
    }
  }, [])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setDisabled(true);
    try {
      const { data } = await api.AdmLogin({ ...formData });
      if(!data){
        alert("could not Login");
        return;
      }
      
      persistAdmToken(data);
      setDisabled(false);
      navigate("/adm/kitchen");
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
          placeholder="Password"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <InteractBox>
          <StyledLink to={"/"}>Login as client to make your order</StyledLink>
          <Button disabled={disabled}>LOGIN</Button>
        </InteractBox>
      </FormContainer>
    </Container>
  )
}