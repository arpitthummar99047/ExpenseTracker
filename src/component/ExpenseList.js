import React, { useState, useEffect } from "react";
import "./css/ExpenseList.css";
import "rsuite/dist/rsuite.min.css";
import defoult from "./img/defoult.jpg"; // Should this be 'default' instead of 'defoult'?

export default function ExpenseList() {
  // State variables for expenses, income, and filtered expenses
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || []
  );

  const [filteredExpenses, setFilteredExpenses] = useState([]);

  // Effect to update local storage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Effect to update local storage whenever income changes
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  // Function to delete an expense by its index
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses); // Update filtered expenses after deletion
  };

  // Function to handle date range change
  const handleDateRangeChange = (value) => {
    const [startDate, endDate] = value;
    // Filter expenses based on the selected date range
    const filtered = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return startDate <= expenseDate && expenseDate <= endDate;
    });
    setFilteredExpenses(filtered);
  };

  // Calculate total amount of expenses
  const totalAmount = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  // Calculate total income
  const totalIncome = income.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  // Calculate total balance
  const totalBalance = totalIncome - totalAmount;

  return (
    <>
      <div className="main">
        {/* <div className="img">
          <img src={defoult} alt="not found" />
          <div>UserName</div>
        </div> */}
        <div className="header">
          <h2>Daily Expense</h2>
        </div>

        <div className="flex-container">
          <div className="income">
            <h3>Income</h3>
            <p>
              <h5>Rs.{totalIncome.toFixed(2)}</h5>
            </p>
          </div>
          <div className="expenses">
            {" "}
            <h3>Expenses</h3>
            <p>
              <h5>Rs.{totalAmount.toFixed(2)}</h5>
            </p>
          </div>
          <div className="balance">
            {" "}
            <h3>Balance</h3>
            <p>
              <h5>Rs.{totalBalance.toFixed(2)}</h5>
            </p>
          </div>
          <div className="transactions">
            {" "}
            <h3>Transactions</h3>
            <p>
              <h5>{expenses.length}</h5>
            </p>
          </div>
        </div>

        {/* Table to display expenses */}
        <div className="expenclist">
          <h1>Expense Table</h1>
          <table className="w3-table-all">
            <thead>
              <tr className="head1">
                <th>Date</th>
                <th>Category</th>
                <th>Payment Mode</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Close</th> {/* Fixed typo: 'close' to 'Close' */}
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} className="body1">
                  <td>{expense.date}</td>
                  <td>{expense.name}</td>
                  <td>{expense.paymentMode}</td>
                  <td className="description">
                    <div className="description-scroll">
                      {expense.description}
                    </div>
                  </td>
                  <td>Rs.{parseFloat(expense.amount).toFixed(2)}</td>{" "}
                  {/* Fixed currency display */}
                  <td
                    className="delete-btn"
                    onClick={() => deleteExpense(index)}
                  >
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
        </div>
      </div>
    </>
  );
}
