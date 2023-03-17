import React from 'react';
import style from './error404.module.css';
class Error extends React.Component {
    render() {
        return (React.createElement("div", { className: style.error }, "this page is not found"));
    }
}
export default Error;
