import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense --> water bill
// addExpense --> gas bill
// setTextFilter --> bill
// getVisibleExpenses

const expenseOne = store.dispatch(addExpense({
    description: 'water bill',
    ammount: 250000,
    createdAt: 1000,
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'gas bill',
    ammount: 80000,
    createdAt: 2000,
}));

const expensethree = store.dispatch(addExpense({
    description: 'rent',
    ammount: 109500
}))

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses); 
});




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(jsx, document.getElementById('app'));
