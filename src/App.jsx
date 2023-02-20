import './App.css';
import './media-queries.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import ListBooks from './Components/ListBooks/ListBooks';
import { GlobalProvider } from './Context/GlobalState';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/form' element={<Form />} />
            <Route path='/listbooks' element={<ListBooks/>} />
          </Routes>
        </GlobalProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
