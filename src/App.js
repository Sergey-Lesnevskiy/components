import './App.css';
import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Error from './pages/Error404/Error';
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(BrowserRouter, null,
                React.createElement(Header, null),
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Main, null) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(Error, null) })))));
    }
}
export default App;
