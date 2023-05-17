import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/New.module.css";

function NewValues({ onAddCharge }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCharge = {
      description,
      value: parseFloat(value),
      date: new Date(),
    };
    onAddCharge(newCharge);
    setDescription("");
    setValue("");
    navigate("/home"); // Navegar para a página inicial após adicionar uma nova cobrança
  };

  return (
    <div>
      <h2 className={styles.title}>Adicionar Valores</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.descricao}>
          <label htmlFor="description">Descrição:</label>
          <input
            className={styles.inputtext}
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className={styles.valor}>
          <label htmlFor="value">Valor:</label>
          <input
            className={styles.inputtext}
            type="number"
            id="value"
            value={value}
            onChange={handleValueChange}
          />
        </div>
        <div className={styles.meuelemento}>
          <button className={styles.btnadd} type="submit">
            Adicionar
          </button>
          <button
            className={styles.btnback}
            type="button"
            onClick={() => navigate("/home")}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewValues;
