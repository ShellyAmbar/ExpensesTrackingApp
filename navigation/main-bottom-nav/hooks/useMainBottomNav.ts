import {useState} from 'react';

const useMainBottomNav = () => {
  const [isShowPopupCreateExpense, setIsShowPopupCreateExpense] =
    useState(false);
  return {
    isShowPopupCreateExpense,
    setIsShowPopupCreateExpense,
  };
};

export default useMainBottomNav;
