export enum Currency {
  Dolar = '$',
  Shekel = '₪',
}
export type Expense = {
  id: number;
  name: string;
  amount: string;
  currency: Currency;
  date: string;
};
export type ExpenseItem = {
  id: number;
  date: string;
  expenses: Expense[];
};
export type ExpenseFilters = {
  titel?: string;
  amount?: string;
  date?: string;
};
