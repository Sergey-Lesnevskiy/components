import Nav from "../Nav/Nav";
import React from "react";
class Header extends React.Component {
    render() {
        return (React.createElement("header", null,
            React.createElement("div", { className: "top-bar animat-dropdown" }),
            React.createElement("div", { className: "main-header" },
                React.createElement("div", { className: "conteiner" },
                    React.createElement("h1", { className: "site-title" }, "Components"))),
            React.createElement(Nav, null)));
    }
}
export default Header;
