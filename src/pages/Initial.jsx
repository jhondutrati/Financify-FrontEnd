import React, { useState } from 'react';
import styles from "../Styles/New.module.css";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
const navigate = useNavigate();
function handleLogin() {
    navigate('/splash');
  }
  return (
   
        <div>
          <h1>Bem-vindo ao App de Controle Financeiro</h1>
          <p>
            O nosso Site ajuda você a gerenciar suas finanças de maneira fácil e eficiente.
            Registre suas receitas, despesas e acompanhe seu orçamento de forma simples e intuitiva.
          </p>
          <button className={styles.btnadd} onClick={handleLogin}>Fazer login</button>
        </div>
  );
};

export default WelcomePage;
