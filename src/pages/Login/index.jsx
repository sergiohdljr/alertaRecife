import { InputField, LoginPage } from "./style";
import Logo from "../../assets/logo.png";

export const Login = () => {
  return (
    <LoginPage>
      <img src={Logo} alt="" />
      <form>
        <InputField htmlFor="E-mail">
          <span>E-mail:</span>
          <input type="text" placeholder="ex: user@gmail.com" name="E-mail" />
        </InputField>
        <InputField htmlFor="Senha">
          <span>Senha:</span>
          <input type="password" placeholder="Senha" />
        </InputField>
        <div>
          <button>Login</button>
          <h3>Cadastre-se</h3>
        </div>
      </form>
    </LoginPage>
  );
};
