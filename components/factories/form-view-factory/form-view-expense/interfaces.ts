import {FormViewProps} from '@ExpensesTracking/components/form-view/interfaces';

export default interface FormViewExpenseProps extends FormViewProps {
  onPickDate?: (date: Date) => void;
}
