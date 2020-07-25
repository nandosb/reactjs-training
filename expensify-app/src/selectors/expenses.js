export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'ammount':
                return a.ammount < b.ammount ? 1 : -1;
        }
    });
}