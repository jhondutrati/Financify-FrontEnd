import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Styles/New.module.css";

function EditValues(props) {
  const { chargeId } = props; // Recebe o chargeId como propriedade
  const [description, setDescription] = useState(props.description || "");
  const [value, setValue] = useState(props.value || "");
  const [date, setDate] = useState(new Date()); // Estado para armazenar a data
  const navigate = useNavigate();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCharge = {
      id: chargeId, // Usa o chargeId recebido como propriedade
      description: description,
      value: parseFloat(value),
      date: date.toISOString(), // Converte a data para o formato ISO
    };

    if (typeof props.handleUpdateCharge === "function") {
      props.handleUpdateCharge(updatedCharge);
    }

    setDescription("");
    setValue("");
    navigate("/home");
  };

  function handleClick(event) {
    if (typeof props.onLogin === "function") {
      props.onLogin(event);
    }
    navigate("/home");
  }

  return (
    <div>
      <h2 className={styles.title}>Editar Valores</h2>
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

        <div className={styles.valor}>
          <label htmlFor="date">Data:</label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div className={styles.meuelemento}>
          <button className={styles.btnadd} type="submit">
            EDITAR
          </button>
          <button className={styles.btnback} onClick={handleClick}>
            VOLTAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditValues;
