import logo from "../../assets/logo_resized.png";
import { useForm } from "react-hook-form";
import {
  FildSet,
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

export const Register = () => {
  const [LinkAvatar, setLinkAvatar] = useState();

  const settingsCloudnary = {
    cloud_name: "dfnzy2bk9",
    upload_preset: "Alerta-Recife",
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formDados) => {
    const img = new FormData();
    img.append("file", formDados.avatar[0]);
    img.append("upload_preset", settingsCloudnary.upload_preset);

    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${settingsCloudnary.cloud_name}/image/upload`,
        img
      )
      .then((resp) => setLinkAvatar(resp.data.secure_url));

    const payload = {
      nome: formDados.nome,
      email: formDados.email,
      senha: formDados.senha,
      fotoPerfil: LinkAvatar,
    };

    const registerUser = await api
      .post("/register", payload)
      .then((resp) => console.log(resp.status));
  };

  return (
    <RegisterPage>
      <ImageContainer>
        <LogoImg src={logo} alt="logo-alerta-recife" loading="lazy" />
      </ImageContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FildSet>
          <Label>Nome: </Label>
          <InputFild type="text" {...register("nome")} />
        </FildSet>
        <FildSet>
          <Label>E-mail: </Label>
          <InputFild type="text" {...register("email")} />
        </FildSet>
        <FildSet>
          <Label>Senha: </Label>
          <InputFild type="text" {...register("senha")} />
        </FildSet>
        <FildSet>
          <Label>Confirmar senha : </Label>
          <InputFild type="text" />
        </FildSet>
        <FildSet>
          <Label>Foto: </Label>
          <InputFild type="file" {...register("avatar")} />
        </FildSet>

        <SubmitBtn type="submit">Registrar</SubmitBtn>
      </Form>
    </RegisterPage>
  );
};
