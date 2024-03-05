import React, { useState, useEffect } from "react";
import "./css/AddIncome.css";

export default function AddIncome() {
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || []
  );

  const addIncome = (event) => {
    event.preventDefault();

    const incomeName = event.target.elements["income-name"].value;
    const incomeAmount = parseFloat(
      event.target.elements["income-amount"].value
    );
    const incomeDate = event.target.elements["income-date"].value;

    if (
      incomeName.trim() === "" ||
      isNaN(incomeAmount) ||
      isNaN(new Date(incomeDate).getTime())
    ) {
      alert("Please enter valid income details.");
      return;
    }

    const formattedDate = new Date(incomeDate).toLocaleDateString("en-US");

    const newIncome = {
      name: incomeName,
      amount: incomeAmount,
      date: formattedDate,
    };

    setIncome([...income, newIncome]);
    event.target.reset();
  };

  const deleteIncome = (index) => {
    setIncome(income.filter((_, i) => i !== index));
  };

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  return (
    <div className="main2">
      <div className="w3-container title1">
        <h1>Income Tracker</h1>
      </div>

      <form
        id="income-form"
        onSubmit={addIncome}
        className="w3-container form1"
      >
        <label htmlFor="income-name">Income Source</label>
        <input
          type="text"
          name="income-name"
          placeholder="Income Source"
          className="w3-input w3-border"
          required
        />

        <label htmlFor="income-amount">Income Amount</label>
        <input
          type="number"
          name="income-amount"
          placeholder="Amount"
          className="w3-input w3-border"
          required
        />

        <label htmlFor="income-date">Date</label>
        <input
          type="date"
          name="income-date"
          className="w3-input w3-border"
          required
        />

        <button
          type="submit"
          className="w3-button w3-white w3-border w3-round-large"
        >
          Add Income
        </button>
      </form>

      <div className="income-table">
        <table className="w3-table-all">
          <thead>
            <tr className="head1">
              <th>Income</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {income.map((incomeItem, index) => (
              <tr key={index} className="body1">
                <td>{incomeItem.name}</td>
                <td>${incomeItem.amount}</td>
                <td>{incomeItem.date}</td>
                <td className="delete-btn" onClick={() => deleteIncome(index)}>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Delete"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <strong>Total:</strong> ${totalIncome.toFixed(2)}{" "}
          {/* Added toFixed(2) to fix decimal precision */}
        </div>
      </div>
    </div>
  );
}
