import Home from './Components/home/Home';
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TourDetails from './Components/TourDetails/TourDetails';
const data = require('./data/db.json')

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/city/:id" element={<TourDetails data={data} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
