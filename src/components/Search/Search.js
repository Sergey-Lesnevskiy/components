import React from 'react';
import style from './search.module.css';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: window.localStorage.getItem('test') || ''
        };
    }
    handleChange = (event) => {
        this.setState({ text: event.target.value });
        this.componentWillUnmount();
    };
    componentWillUnmount() {
        localStorage.setItem('test', this.state.text);
    }
    render() {
        return (React.createElement("div", { className: style.wrapper__search },
            React.createElement("label", null,
                React.createElement("input", { className: style.search, defaultValue: this.state.text, onChange: this.handleChange, type: 'text', placeholder: 'Search' }))));
    }
}
export default Search;
