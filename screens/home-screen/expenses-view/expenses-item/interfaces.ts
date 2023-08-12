enum Currency {
  Dolar = '$',
  Shekel = '₪',
}
type Expense = {
  id: number;
  name: string;
  amount: string;
  currency: Currency;
  date: string;
};
type ExpenseItem = {
  id: number;
  date: string;
  expenses: Expense[];
};
type ExpensesItemProps = {
  onPressItem: (expense: Expense) => void;
  item: ExpenseItem;
};

export {Currency, ExpenseItem, ExpensesItemProps, Expense};
