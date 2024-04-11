import React from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import "./appComponentsStyles/HomePage.css";
import RecentTxn from "./RecentTxn";
import { useExpense } from "../../store/ExpenseContext";

const HomePage = () => {
  const {
    expenses,
    // addExpense,
    // amount,
    // setAmount,
    addAmtPopupOpen,
    setAddAmtPopupOpen,
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
    categoryTotals,
    setCategoryTotals,
  } = useExpense();

  const data = categoryTotals.map((expenseWithCategory, id) => ({
    id: id,
    value: expenseWithCategory.amount,
    label: expenseWithCategory.category,
  }));

  const addIncome = () => {
    setAddAmtPopupOpen(true);
  };

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.expenseAmount),
    0
  );

  return (
    <div className="container">
      <nav className="navbar">
        <Typography variant="h5" gutterBottom>
          Expense Tracker
        </Typography>
      </nav>
      <div className="content">
        <div className="widget">
          <div className="wallet-card">
            <h1>Wallet Balance: ${incomeAmount}</h1>
            <button onClick={addIncome}>Add Income</button>
            <Dialog
              open={addAmtPopupOpen}
              onClose={() => setAddAmtPopupOpen(false)}
            >
              <DialogTitle>Add Balance</DialogTitle>
              <DialogContent className="dialog-content">
                <TextField
                  type="number"
                  label="Amount"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setAddAmtPopupOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleIncomeSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className="widget">
          <h1>Expenses: ${totalExpense}</h1>

          <button onClick={() => setAddExpensePopupOpen(true)}>
            Add Expense
          </button>
          <Dialog
            open={addExpensePopupOpen}
            onClose={() => setAddExpensePopupOpen(false)}
          >
            <DialogTitle>Add Expenses</DialogTitle>
            <DialogContent className="dialog-content">
              <TextField
                type="text"
                label="Title"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
                fullWidth
              />
              <TextField
                type="number"
                label="Price"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                fullWidth
              />
              <TextField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
              />

              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                  autoWidth
                  label="Select Category"
                >
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Investment">Investment</MenuItem>
                  <MenuItem value="HomeExpense">Home Expense</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAddExpensePopupOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleExpenseSubmit}>Submit</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="chart-container">
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={200}
            width={400}
          />
        </div>
      </div>
      <RecentTxn
        expenses={expenses}
        categoryTotals={categoryTotals}
        setCategoryTotals={setCategoryTotals}
      />
    </div>
  );
};

export default HomePage;
