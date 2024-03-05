import React, { useState, useEffect } from "react";
import "./css/AddExpens.css"; // Fixed typo in CSS filename
import { DatePicker } from "rsuite";

export default function AddExpense() {
  // Fixed component name
  // State to manage expenses
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  // Function to add expense
  const addExpense = (event) => {
    event.preventDefault();

    const expenseNameElement = event.target.elements["expense-name"];
    const expenseAmountElement = event.target.elements["expense-amount"];
    const expenseDateElement = event.target.elements["expense-date"];

    if (!expenseNameElement || !expenseAmountElement) {
      console.error("Expense name or amount element not found");
      return;
    }

    const expenseName = expenseNameElement.value.toUpperCase();
    const expenseAmount = parseFloat(expenseAmountElement.value);
    const expenseDate = new Date(expenseDateElement.value);

    if (isNaN(expenseDate.getTime())) {
      alert("Please enter a valid date.");
      return;
    }

    const day = String(expenseDate.getDate()).padStart(2, "0");
    const month = String(expenseDate.getMonth() + 1).padStart(2, "0");
    const year = expenseDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const newExpense = {
      name: expenseName,
      amount: expenseAmount,
      date: formattedDate,
      paymentMode: event.target.elements["expense-mode"].value.toUpperCase(),
      description: event.target.elements["expense-description"].value,
    };

    setExpenses([...expenses, newExpense]);
    event.target.reset();
  };

  // Function to delete expense
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Calculate total amount
  const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="main1">
      <div className="w3-container title1">
        <h1>Add Expense</h1>
      </div>
      <form
        id="expense-form"
        onSubmit={addExpense}
        className="w3-container form1"
      >
        <label htmlFor="expense-name">Expense Name</label>
        <input
          type="text"
          name="expense-name"
          placeholder="Expense Name"
          className="w3-input w3-border"
          required
        />
        <label htmlFor="expense-amount">Amount</label>
        <input
          type="number"
          name="expense-amount"
          placeholder="Amount"
          className="w3-input w3-border"
          required
        />
        <label htmlFor="expense-mode">Mode</label>
        <select name="expense-mode" id="Mode" className="w3-input w3-border">
          <option value="online">Online</option>
          <option value="cash">Cash</option>
        </select>
        <label htmlFor="expense-description">Description</label>
        <input
          type="text"
          name="expense-description"
          placeholder="Description"
          className="w3-input w3-border"
          required
        />
        <label htmlFor="expense-date">Date</label>
        <input
          type="date"
          name="expense-date"
          placeholder="DD/MM/YYYY"
          className="w3-input w3-border"
          required
        />

        <button
          type="submit"
          className="w3-button w3-white w3-border w3-round-large"
        >
          Add Expense
        </button>
      </form>
      <div className="expense-table">
        <table className="w3-table-all">
          <thead>
            <tr className="head1">
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="body1">
                <td>{expense.name}</td>
                <td>Rs.{parseFloat(expense.amount).toFixed(2)}</td>{" "}
                {/* Fixed currency display */}
                <td>{expense.date}</td>
                <td className="delete-btn" onClick={() => deleteExpense(index)}>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <strong>Total:</strong> Rs.{totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
