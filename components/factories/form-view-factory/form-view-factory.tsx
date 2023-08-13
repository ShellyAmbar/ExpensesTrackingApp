import FormViewExpense from './form-view-expense/form-view-expense';
import FormViewFactoryProps from './interfaces';
import FormView from '@ExpensesTracking/components/form-view/form-view';

const FormViewFactory = ({type, ...props}: FormViewFactoryProps) => {
  switch (type) {
    case 'expense':
      return <FormViewExpense {...props} />;

    default:
      return <FormView {...props} />;
  }
};

export default FormViewFactory;
