// ExpenseContext.js
import React, { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [addAmtPopupOpen, setAddAmtPopupOpen] = useState(false);
  const [addExpensePopupOpen, setAddExpensePopupOpen] = useState(false);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expense, setExpense] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("default");
  const [date, setDate] = useState("");
  const [categoryTotals, setCategoryTotals] = useState([]); // Include categoryTotals in the context

  const addExpense = (newExpenseList) => {
    setExpenses(newExpenseList);
  };

  const handleIncomeSubmit = () => {
    setAddAmtPopupOpen(false);
  };

  const handleExpenseSubmit = () => {
    const newExpense = { expense, expenseAmount, date, expenseCategory };
    addExpense([...expenses, newExpense]);
    setIncomeAmount(incomeAmount - expenseAmount);
    setAddExpensePopupOpen(false);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        expenseAmount,
        setExpenseAmount,
        incomeAmount,
        setIncomeAmount,
        expense,
        setExpense,
        expenseCategory,
        setExpenseCategory,
        date,
        setDate,
        handleIncomeSubmit,
        handleExpenseSubmit,
        addExpensePopupOpen,
        setAddExpensePopupOpen,
        addAmtPopupOpen,
        setAddAmtPopupOpen,
        categoryTotals,
        setCategoryTotals,

        setExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);
