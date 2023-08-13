import {FormViewProps} from '@ExpensesTracking/components/form-view/interfaces';

export default interface FormViewFactoryProps extends FormViewProps {
  type?: 'expense';
  onPickDate?: (date: Date) => void;
}
