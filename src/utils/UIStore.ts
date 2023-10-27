import { Store } from "pullstate";

import { pageProps } from './Types'

interface IUIStore {
  page: pageProps;
}

export const UIStore = new Store<IUIStore>({
  page: 'About',
});
 
