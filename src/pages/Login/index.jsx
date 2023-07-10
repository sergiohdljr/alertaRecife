import { LoginPage } from "./style";
import logo from "../../assets/logo_resized.png";
import { Form } from "../Register/style";
import { useForm } from "react-hook-form";
import { Context } from "../../context/authContext";
import { useContext } from "react";

export const Login = () => {
  const { handleLogin } = useContext(Context);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await handleLogin(data.email, data.senha);
  };

  return (
    <LoginPage>
      <img src={logo} alt="logo-alerta-recife" loading="lazy" />
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.FieldSet>
          <Label>E-mail: </Label>
          <Form.Input type="text" {...register("email")} />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>Senha: </Label>
          <Form.Input type="password" {...register("senha")} />
        </Form.FieldSet>
        <Form.Submit> Login </Form.Submit>
      </Form.Root>
    </LoginPage>
  );
};
