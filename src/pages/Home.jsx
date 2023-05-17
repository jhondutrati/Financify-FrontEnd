import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Styles/Home.css";
import styles from "../Styles/New.module.css";


const Dashboard = (props) => {
  const navigate = useNavigate();

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [balance, setBalance] = useState(1200);
  const [charges, setCharges] = useState([
    {
      id: 1,
      description: "Conta de luz",
      value: 120,
      date: new Date(),
    },
    {
      id: 2,
      description: "Conta de água",
      value: 90,
      date: new Date(),
    },
    {
      id: 3,
      description: "Aluguel",
      value: 900,
      date: new Date(),
    },
  ]);

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleUpdateCharge = (updatedCharge) => {
    const updatedCharges = charges.map((charge) => {
      if (charge.id === updatedCharge.id) {
        return updatedCharge;
      }
      return charge;
    });
    setCharges(updatedCharges);
  };

  const handleEditCharge = (id) => {
    const chargeToEdit = charges.find((charge) => charge.id === id);
    navigate(`/home/edit/${id}`, { state: { charge: chargeToEdit } });
  };

  const handleDeleteCharge = (id) => {
    const updatedCharges = charges.filter((charge) => charge.id !== id);
    setCharges(updatedCharges);
  };

  const filteredCharges = charges.filter((charge) => {
    const chargeDate = new Date(charge.date);
    return chargeDate >= startDate && chargeDate <= endDate;
  });

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("pt-BR", options);
  };

  return (
    <div>
      
      <div>
        <button
          className={styles.calender}
          onClick={() => setDatePickerVisible(!datePickerVisible)}
        >
          Selecionar datas
        </button>
        {datePickerVisible && (
          <DatePicker
            selected={startDate}
            onChange={handleDateRangeChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )}
      </div>
      <br />
      <div className="dashboard-table-container">
        <div>
          <Table striped bordered hover size="sm" className="table-without-bg">
            <thead>
              <tr>
                <th id="id">ID</th>
                <th id="description">Descrição</th>
                <th id="value">Valor</th>
                <th id="date">Data</th>
                <th id="actions">Ações</th>
              </tr>
            </thead>
            
            <tbody>
              {filteredCharges.map((charge) => (
                <tr key={charge.id}>
                  <td>{charge.id}</td>
                  <td>{charge.description}</td>
                  <td>R$ {charge.value}</td>
                  <td>{formatDate(charge.date)}</td>
                  <td>
                    {" "}
                    <button
                      className={styles.btnadd}
                      onClick={() => handleEditCharge(charge.id)}
                    >
                      Editar
                    </button>
                    <button
                      className={styles.btnback}
                      onClick={() => handleDeleteCharge(charge.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <br />
        <div>
          <NavLink className={styles.btnadd} to="/home/New">
            Adicionar
          </NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
