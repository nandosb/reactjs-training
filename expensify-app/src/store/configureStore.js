import { createStore, combineReducers } from 'redux'; //named exports
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore( combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    }));

    return store;
}
