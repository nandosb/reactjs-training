import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    
    state = {
        options: this.props.options
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('data'));
            if (options) {
                this.setState(() => ({options}))
            }
        } catch (e) {
            // Do nothing. Use default value
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const data = JSON.stringify(this.state.options);
            localStorage.setItem('data', data);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
                options: prevState.options.filter((option) => optionToRemove !== option)
            })
        )
    };

    handlePickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option] )}))
    };

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ['test']
}