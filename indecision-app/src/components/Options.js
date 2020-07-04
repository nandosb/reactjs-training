import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Clear All</button>
        {props.options.length === 0 && <p>Add some data to begin</p> }
        {props.options.length > 0 && (
            <ol>
                {
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ol>
        )}
    </div>
);

export default Options;