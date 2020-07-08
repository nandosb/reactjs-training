import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >Clear All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add some data to begin</p> }
        {props.options.length > 0 && (
            <div>
                {
                    props.options.map((option, index) => (
                        <Option 
                            count={index + 1}
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </div>
            
        )}
    </div>
);

export default Options;