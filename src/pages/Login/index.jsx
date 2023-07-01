import { LoginPage } from "./style";
import logo from "../../assets/logo_resized.png";
import { Form, FildSet, InputFild, ImageContainer, SubmitBtn, Label } from '../Register/style'

export const Login = () => {
  
  return (
    <LoginPage>
      <img src={logo} alt="logo-alerta-recife" loading="lazy"/>
      <Form>
        <FildSet>
          <Label>E-mail: </Label>
          <InputFild type="text" />
        </FildSet>
        <FildSet>
          <Label>Senha: </Label>
          <InputFild type="password" />
        </FildSet>
        <SubmitBtn> Login </SubmitBtn>
      </Form>
    </LoginPage>
  );
};
