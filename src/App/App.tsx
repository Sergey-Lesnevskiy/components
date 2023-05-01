import './App.css';
import Main from '../pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import About from '../pages/About/About';
import Error from '../pages/Error404/Error';
import FormPage from '../pages/FormPage/FormPage';

const App = function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Error to="Page is not found" />} />
      </Routes>
    </div>
  );
};

export default App;
