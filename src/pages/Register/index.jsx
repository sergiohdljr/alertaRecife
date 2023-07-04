import logo from '../../assets/logo_resized.png'
import { FildSet, Form, ImageContainer, InputFild, Label, LogoImg, RegisterPage, SubmitBtn } from './style'

export const Register = () => {
    return(
        <RegisterPage>
           <ImageContainer>
             < LogoImg src={logo} alt="logo-alerta-recife" loading='lazy' />
           </ImageContainer>
           <Form>
            <FildSet>
                <Label>Nome: </Label>
                <InputFild type="text"  />
            </FildSet>
            <FildSet>
                <Label>E-mail: </Label>
                <InputFild type="text"  />
            </FildSet>
            <FildSet>
                <Label>Senha: </Label>
                <InputFild type="text"  />
            </FildSet>
            <FildSet>
                <Label>Confirmar senha : </Label>
                <InputFild type="text"  />
            </FildSet>
            <FildSet>
                <Label>Foto: </Label>
                <InputFild type="text"  />
            </FildSet>
            
            <SubmitBtn type='submit'>Registrar</SubmitBtn>
           </Form>
        </RegisterPage>
    )
} 