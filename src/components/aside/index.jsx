import { AsideStyle } from "../style"
import logo from "../assets/logo.png"

export const Aside = () => {
    return(
        
        <AsideStyle>
            <img src={logo} alt="" />
            
            <a href="#"  class="btn-perfil">
              <h3>usuário </h3>
              <h5>@usuário</h5>
            </a>
         

            <a href="#"   class="btn-inicio">
                <h3> Inicio</h3> </a>

            <a href="#">
                <h3> Feed </h3> </a>

            <a href="#" >
                <h3> Pefil</h3> </a>

                <a href="#" >
                <h3> Configurações</h3> </a>

                <button>
                    Alertar
                </button>


        </AsideStyle>
    )
}