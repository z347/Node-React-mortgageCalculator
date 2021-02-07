import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { logger } from 'utils';
import { rootReducer } from 'store/reducers/root.reducer';

const middlewares = [thunk, logger];
const enhancedStore = composeWithDevTools(applyMiddleware(...middlewares));

const localStore = 'this-react-application-local-store';
const serialisedState = localStorage.getItem(localStore);
const preloadedState = serialisedState ? JSON.parse(serialisedState) : null;

export const store = preloadedState
  ? createStore(rootReducer, preloadedState, enhancedStore)
  : createStore(rootReducer, enhancedStore);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(localStore, JSON.stringify(state));
});

export type RootState = ReturnType<typeof rootReducer>;
