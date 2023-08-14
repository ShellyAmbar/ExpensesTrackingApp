import {FormViewProps} from '@ExpensesTracking/components/form-view/interfaces';
import {Expense} from '@ExpensesTracking/store/data/expanses';

export default interface FormViewExpenseProps extends FormViewProps {
  onConfirmFormExpense?: (expense: Expense) => void;
  expense?: Expense;
}
