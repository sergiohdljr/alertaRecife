import { LoginPage } from "./style";
import logo from "../../assets/logo_resized.png";
import { Form, InputFild, SubmitBtn, Label } from "../Register/style";
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
          <InputFild type="text" {...register("email")} />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>Senha: </Label>
          <InputFild type="password" {...register("senha")} />
        </Form.FieldSet>
        <SubmitBtn> Login </SubmitBtn>
      </Form.Root>
    </LoginPage>
  );
};
