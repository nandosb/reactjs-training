import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Editing expense number {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;