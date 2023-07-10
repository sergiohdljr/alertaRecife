import logo from "../../assets/logo_resized.png";
import { useForm } from "react-hook-form";
import {
  Form,
  ImageContainer,
  InputFild,
  Label,
  LogoImg,
  RegisterPage,
  SubmitBtn,
} from "./style";
import { useState } from "react";
import axios from "axios";
import { api } from "../../service/axios";
import { settingsCloudnary } from "../../utils/cloudnary";

export const Register = () => {
  const [Isloading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formDados) => {
    const img = new FormData();
    img.append("file", formDados.avatar[0]);
    img.append("upload_preset", settingsCloudnary.upload_preset);
    setIsLoading(true);
    const getUrlImg = await axios
      .post(
        `https://api.cloudinary.com/v1_1/${settingsCloudnary.cloud_name}/image/upload`,
        img
      )
      .then(async (resp) => {
        await api.post("/register", {
          nome: formDados.nome,
          email: formDados.email,
          senha: formDados.senha,
          fotoPerfil: resp.data.secure_url,
        });
        setIsLoading(false);
      });
  };

  return (
    <RegisterPage>
      <ImageContainer>
        <LogoImg src={logo} alt="logo-alerta-recife" loading="lazy" />
      </ImageContainer>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.FieldSet>
          <Label>Nome: </Label>
          <InputFild type="text" {...register("nome")} />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>E-mail: </Label>
          <InputFild type="text" {...register("email")} />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>Senha: </Label>
          <InputFild type="text" {...register("senha")} />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>Confirmar senha : </Label>
          <InputFild type="text" />
        </Form.FieldSet>
        <Form.FieldSet>
          <Label>Foto: </Label>
          <InputFild type="file" {...register("avatar")} />
        </Form.FieldSet>

        <SubmitBtn type="submit">
          {Isloading ? "Registrando..." : "Registrar"}
        </SubmitBtn>
      </Form.Root>
    </RegisterPage>
  );
};
