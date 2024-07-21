import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import FormTodo from './pages/formtodo/FormTodo';

function App() {

  return (
    <div>
      <Header nome="Vicente" />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/formtodo' Component={FormTodo} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
