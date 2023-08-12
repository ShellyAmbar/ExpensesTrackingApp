import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './expenses-view.styles';
import ExpensesItem from './expenses-item/expenses-item';
import useExpensesView from './hooks/useExpensesView';
import {Expense, ExpenseItem} from './expenses-item/interfaces';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import Filter from '@ExpensesTracking/assets/images/filter.svg';
import {PopupType} from './hooks/interfaces';
import Popup from '@ExpensesTracking/components/popup/popup';
import PopupFilter from './popup-filter/popup-filter';
import PopupUpdate from './popup-update/popup-update';
import {observer} from 'mobx-react';
const ExpensesView = observer(() => {
  const {
    cleareFilters,

    expenses,
    rootStore,
    visiblePopup,
    setVisiblePopup,
    selectedExpanseToupdate,
    setSelectedExpanseToupdate,
    updateExpense,
    filterExpenses,
  } = useExpensesView();

  return (
    <Box style={styles.container}>
      {visiblePopup === PopupType.FilterExpance && (
        <Popup isVisible={visiblePopup === PopupType.FilterExpance}>
          <PopupFilter
            onClickClean={() => {
              cleareFilters();
              setVisiblePopup(PopupType.Empthy);
            }}
            onSubmit={() => {
              filterExpenses();
              setVisiblePopup(PopupType.Empthy);
            }}
            onClickClose={() => setVisiblePopup(PopupType.Empthy)}
          />
        </Popup>
      )}
      {visiblePopup === PopupType.UpdateExpanse && (
        <Popup
          onClickClose={() => setVisiblePopup(PopupType.Empthy)}
          isVisible={visiblePopup === PopupType.UpdateExpanse}>
          <PopupUpdate
            item={selectedExpanseToupdate as Expense}
            onSubmit={expanse => {
              updateExpense(expanse);
              setVisiblePopup(PopupType.Empthy);
            }}
          />
        </Popup>
      )}
      <Box style={styles.horizontalStart}>
        <TextFactory style={styles.title}>Total Expenses: </TextFactory>
        <Box style={styles.numbers}>
          <TextFactory style={styles.amount}>
            {rootStore.user.totalExpenses.toString().includes('.')
              ? `&${rootStore.user.totalExpenses.toString().split('.')[0]}.`
              : `$${rootStore.user.totalExpenses.toString()}`}
          </TextFactory>
          {rootStore.user.totalExpenses.toString().includes('.') && (
            <TextFactory style={styles.decimal}>{`${
              rootStore.user.totalExpenses.toString().split('.')[1]
            }`}</TextFactory>
          )}
        </Box>
      </Box>
      <Spacer size={11} />
      <Box style={styles.horizontalEnd}>
        <ButtonFactory
          onPress={() => setVisiblePopup(PopupType.FilterExpance)}
          type="secondary"
          style={{}}>
          <Filter />
          <TextFactory style={styles.filterText}>Filters</TextFactory>
        </ButtonFactory>
      </Box>
      <Spacer size={11} />

      <Box
        flatList
        ref={() => {}}
        data={expenses.slice().sort((objA, objB) => {
          console.log(new Date().getMilliseconds());

          return (
            new Date(objA.date).getMilliseconds() -
            new Date(objB.date).getMilliseconds()
          );
        })}
        renderItem={({item, index}: {item: ExpenseItem; index: number}) => (
          <ExpensesItem
            key={item.id}
            item={item}
            onPressItem={expense => {
              setSelectedExpanseToupdate(expense);
              setVisiblePopup(PopupType.UpdateExpanse);
            }}
          />
        )}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
    </Box>
  );
});

export default ExpensesView;
