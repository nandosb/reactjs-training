import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectedExpeneses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.length > 0 ? (
            <ul>
            {
                props.expenses.map((expense) => (
                    <li key={ expense.id }>
                        <ExpenseListItem {...expense}/>
                    </li>
                ))
            }
            </ul>
        ) : ( <p>No expenses available</p>)}
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpeneses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;