import {Expense} from '../expenses-item/interfaces';

type PopupUpdateProps = {
  item: Expense;
  onSubmit: (item: Expense) => void;
};
export default PopupUpdateProps;
