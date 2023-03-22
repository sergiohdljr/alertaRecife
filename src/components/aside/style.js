import styled from "styled-components";

export const AsideStyle = styled.aside`
height: 100vh;

a{
display: block;
height: 30px;
width: 100px;
margin-top: 10px;
margin-left:160px;
color: ${({theme})=>theme.preto};
font-style: normal;

h3{

}

h5{
padding-top:0px ;
color:#5B7083;
font-size:13px;
}

}


button{
width: 227px;
height: 49px;
margin-top: 10px;
margin-left:90px;
border-radius: 9999px;
margin-top: 50px;
background-color:  ${({theme})=>theme.roxoEscuro} ;
border: 0px;
color:white;
}

.btn-perfil, .btn-inicio{
    margin-top:10px;
}


`
