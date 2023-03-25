import './App.css';
import React from 'react';
import Main from './pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Error from './pages/Error404/Error';
import FormPage from './pages/FormPage/FormPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<Error to="/not-found" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
