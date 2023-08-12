export enum Currency {
  Dolar = '$',
  Shekel = '₪',
}
export type Expense = {
  id: number;
  name: string;
  amount: string;
  currency: Currency;
  date: Date;
};
export type ExpenseItem = {
  id: number;
  date: Date;
  expenses: Expense[];
};
export type ExpenseFilters = {
  titel?: string;
  amount?: string;
  date?: Date;
};
