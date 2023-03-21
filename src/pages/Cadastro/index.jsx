import Logo from '../../assets/logo.png'
import { Cadastro} from './style';

export const CadastroPage = () => {
  return (
    <Cadastro>
      <img src={Logo} alt=""/>
      <form>
        <label htmlFor="nome">
          <span>Nome Completo:</span>
          <input type="text" name="nome" placeholder="Digite seu nome completo" />
        </label>
        <div className="split--input">
          <label htmlFor="Cpf">
            <span>CPF:</span>
            <input type="text" name="CPF" placeholder="xxx-xxx-xxx-xxx" />
          </label>
          <label htmlFor="numero">
            <span>Numero :</span>
            <input type="number" name="numero" placeholder="[xx] xxxx-xxxx" />
          </label>
        </div>
        <label htmlFor="Email">
          <span>E-mail:</span>
          <input type="email" name="Email" placeholder="exemplo@gmail.com" />
        </label>
        <label htmlFor="confirmEmail">
          <span>Confirme seu  E-mail:</span>
          <input type="email" name="nome" placeholder="exemplo@gmail.com" />
        </label>
        <div className="split--input">
          <label htmlFor="senha">
            <span>Senha:</span>
            <input type="password" name="senha" placeholder="Digite sua senha" />
          </label>
          <label htmlFor="confirmSenha">
            <span>Confirme sua Senha:</span>
            <input type="password" name="confirmSenha" placeholder="Confirme sua senha" />
          </label>
        </div>
        <div className="split--input">
          <label htmlFor="CEP">
            <span>Cep:</span>
            <input type="text" name="CEP" placeholder="xxxxx-xxx" />
          </label>
          <label htmlFor="UF">
            <span>UF:</span>
            <input type="text" name="UF" placeholder="Digite seu UF" />
          </label>
        </div>
        <div className="button--form">
            <button>Cadastrar</button>
            <h3>Login</h3>
        </div>
      </form>
    </Cadastro>
  );
};
