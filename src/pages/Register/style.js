import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterPage = styled.main`
  background-color: ${({ theme }) => theme.cores.background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageContainer = styled.figure`
  width: 150px;
  height: 150px;
  overflow: hidden;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const Root = styled.form`
  width: 90%;
  max-width: 470px;
  background-color: ${({ theme }) => theme.cores.app};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 0.5rem;
`;
export const FieldSet = styled.div`
  all: none;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`;

export const Label = styled.span`
  font-size: 0.8rem;
`;

export const Input = styled.input`
  all: unset;
  border: 1px black solid;
  border-radius: 0.2rem;
  width: 90%;
  height: 6rem;
  padding: 0 0.5rem 0 0.5rem;
`;
export const Submit = styled.button`
  all: none;
  width: 70%;
  border: 1px black solid;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.cores.roxoEscuro};
  padding: 0.5rem;
`;

export const Form = {
  Root,
  FieldSet,
  Input,
  Submit,
};
