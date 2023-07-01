import { LoginPage } from "./style";
import logo from "../../assets/logo_resized.png";
import {
  Form,
  FildSet,
  InputFild,
  ImageContainer,
  SubmitBtn,
  Label,
} from "../Register/style";
import { useForm } from "react-hook-form";
import { Context } from "../../context/authContext";
import { useContext } from "react";

export const Login = () => {
  const { authenticated, handleLogin } = useContext(Context);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await handleLogin(data.email, data.senha);
  };

  return (
    <LoginPage>
      {console.log(authenticated)}
      <img src={logo} alt="logo-alerta-recife" loading="lazy" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FildSet>
          <Label>E-mail: </Label>
          <InputFild type="text" {...register("email")} />
        </FildSet>
        <FildSet>
          <Label>Senha: </Label>
          <InputFild type="password" {...register("senha")} />
        </FildSet>
        <SubmitBtn> Login </SubmitBtn>
      </Form>
    </LoginPage>
  );
};
