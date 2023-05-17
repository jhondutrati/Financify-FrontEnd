import React from "react";
import { FaUser, FaLock, FaQuestionCircle, FaRegLifeRing } from "react-icons/fa";
import { Link } from "react-router-dom";

function ConfigScreen() {
  return (
    <div>
      <div>
        <Link to="/home/dados"><FaUser size={50} /></Link>
        <p>Dados da conta</p>
      </div>
      <div>
        <Link to="/home/privacidade"><FaLock size={50} /></Link>
        <p>Privacidade e segurança</p>
      </div>
      <div>
        <Link to="/home/ajuda"><FaRegLifeRing size={50} /></Link>
        <p>Suporte</p>
      </div>
    </div>
  );
}

export default ConfigScreen;
