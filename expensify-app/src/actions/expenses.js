import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
export const addExpense = ({id, description, note='', ammount, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        ammount,
        createdAt,
    }
});

// REMOVE_EXPENSE
export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

