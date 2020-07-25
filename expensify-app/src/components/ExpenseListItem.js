import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

// description, ammount, createdAt

const ExpenseListItem = ({id, description, ammount, createdAt, dispatch}) => (
    <div>
        <p>Description: { description }</p>
        <p>Ammount: { ammount } - CreatedAt: { createdAt }</p>
        <button onClick={(e) => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);