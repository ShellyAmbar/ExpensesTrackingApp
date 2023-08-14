import {FormViewProps} from '@ExpensesTracking/components/form-view/interfaces';
import {Expense} from '@ExpensesTracking/store/data/expanses';

export default interface FormViewFactoryProps extends FormViewProps {
  type?: 'expense';
  onConfirmFormExpense?: (expense: Expense) => void;
  expense?: Expense;
}
