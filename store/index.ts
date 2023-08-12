import {createContext, useContext} from 'react';
import {UserStore} from './user-store';

export class RootStore {
  user: UserStore;

  constructor() {
    this.user = new UserStore();
  }
}

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);
const StoreProvider = StoreContext.Provider;
const useStore = () => useContext(StoreContext);
export {rootStore, StoreContext, StoreProvider, useStore};
