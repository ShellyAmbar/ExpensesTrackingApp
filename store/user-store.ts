import {
  ExpenseFilters,
  ExpenseItem,
} from '@ExpensesTracking/store/data/expanses';

export class UserStore {
  fullName: string;
  expenses: ExpenseItem[];
  isLoggedIn: boolean;
  totalExpenses: number;
  filters: ExpenseFilters;

  constructor() {
    this.fullName = '';
    this.expenses = [];
    this.isLoggedIn = false;
    this.totalExpenses = 0;
    this.filters = {};
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
  }
  setExpenses(expenses: ExpenseItem[]) {
    this.expenses = expenses;
  }
  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
  setTotalExpenses(totalExpenses: number) {
    this.totalExpenses = totalExpenses;
  }
  setFilters(filters: ExpenseFilters) {
    this.filters = filters;
  }
}
