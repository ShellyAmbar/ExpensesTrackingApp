import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import styles from './expenses-view.styles';
import ExpensesItem from './expenses-item/expenses-item';
import useExpensesView from './hooks/useExpensesView';
import {ExpenseItem} from './expenses-item/interfaces';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import Filter from '@ExpensesTracking/assets/images/filter.svg';
import {PopupType} from './hooks/interfaces';
import Popup from '@ExpensesTracking/components/popup/popup';
import PopupFilter from './popup-filter/popup-filter';
import PopupUpdate from './popup-update/popup-update';
const ExpensesView = () => {
  const {
    expenses,

    totalExpenses,
    visiblePopup,
    setVisiblePopup,
    selectedExpanseToupdate,
    setSelectedExpanseToupdate,
  } = useExpensesView();
  return (
    <Box style={styles.container}>
      {visiblePopup === PopupType.FilterExpance && (
        <Popup
          onClickClose={() => setVisiblePopup(PopupType.Empthy)}
          isVisible={visiblePopup === PopupType.FilterExpance}>
          <PopupFilter />
        </Popup>
      )}
      {visiblePopup === PopupType.UpdateExpanse && (
        <Popup
          onClickClose={() => setVisiblePopup(PopupType.Empthy)}
          isVisible={visiblePopup === PopupType.UpdateExpanse}>
          <PopupUpdate
            item={selectedExpanseToupdate}
            onSubmit={() => {
              setVisiblePopup(PopupType.Empthy);
            }}
          />
        </Popup>
      )}
      <Box style={styles.horizontalStart}>
        <TextFactory style={styles.title}>Total Expenses: </TextFactory>
        <Box style={styles.numbers}>
          <TextFactory
            style={styles.amount}>{`$${totalExpenses}.`}</TextFactory>
          <TextFactory style={styles.decimal}>{`${'00'}`}</TextFactory>
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
        data={expenses}
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
};

export default ExpensesView;
