import React from "react";
import { Link } from "react-router-dom";
import style from './nav.module.css';
class Nav extends React.Component {
    render() {
        return (React.createElement("ul", { className: style.navLink },
            React.createElement("li", null,
                React.createElement(Link, { className: style.linkPage, to: "/" }, "Main")),
            React.createElement("li", null,
                React.createElement(Link, { className: style.linkPage, to: "/about" }, "About")),
            React.createElement("li", null,
                React.createElement(Link, { className: style.linkPage, to: "/error" }, "Error"))));
    }
}
export default Nav;
