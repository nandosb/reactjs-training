const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            // rename id as expenseId for more clarity
            return state.filter(({ id : expenseId }) => ( expenseId !== action.id ));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        text: action.text
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};