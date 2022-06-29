import { useEffect, useState } from "react"
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

export default function SignUp(){
  const { token } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: ""
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{
    if(token){
      navigate("/signin")
    }
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.password !== formData.confirmation){
      return alert("Passwords don't match. Try again...")
    }
    setDisabled(true);
    try {
      delete formData.confirmation;
      await api.register({ ...formData });
      setDisabled(false);
      navigate("/signin");
    } catch (error) {
      if(error.response.status === 409){
        alert("Unauthorized. Email already registered.")
      } else{
        alert("Could not register. Try later.");
      }
      setDisabled(false);
    }
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Registro</Title>
        <Input 
          placeholder="Nome"
          type="name"
          onChange={(e) => handleChange(e)}
          name="name"
          value={formData.name}
          required
        />
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
        <Input 
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => handleChange(e)}
          name="confirmation"
          value={formData.confirmation}
          required
        />
        <InteractBox>
          <StyledLink to={"/signin"}>Switch back to login</StyledLink>
          <Button disabled={disabled}>REGISTER</Button>
        </InteractBox>
      </FormContainer>
    </Container>
  );
}
