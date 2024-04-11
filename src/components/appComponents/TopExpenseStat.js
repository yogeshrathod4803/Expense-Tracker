import React, { useEffect, useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./appComponentsStyles/TopExpenseStat.css";
import { ExpenseContext } from "../../store/ExpenseContext";

export default function TopExpenseStat() {
  const { expenses, categoryTotals, setCategoryTotals } =
    useContext(ExpenseContext);

  const calculateCategoryTotal = () => {
    const categoryMap = new Map();

    expenses.forEach((expense) => {
      const { expenseCategory, expenseAmount } = expense;
      if (categoryMap.has(expenseCategory)) {
        categoryMap.set(
          expenseCategory,
          categoryMap.get(expenseCategory) + parseFloat(expenseAmount)
        );
      } else {
        categoryMap.set(expenseCategory, parseFloat(expenseAmount));
      }
    });

    const categoryData = [];
    categoryMap.forEach((amount, category) => {
      categoryData.push({ category, amount });
    });

    return categoryData;
  };

  useEffect(() => {
    setCategoryTotals(calculateCategoryTotal());
  }, [expenses]);

  console.log("categoryTotals", categoryTotals);

  return (
    <div className="container">
      <div className="chart-container">
        <BarChart width={500} height={300} data={categoryTotals}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
