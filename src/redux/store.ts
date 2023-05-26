import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers';
import state from './state';

const store: any = createStore(reducers, state, applyMiddleware(thunk));

export default store;
