import Home from './Components/home/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Tour from './Components/tours/tour/Tour';
import TourDetails from './Components/TourDetails/TourDetails';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/city/:id" component={<Tour />}></Route>
        <Route path="/city/:id/deatails" component={<TourDetails />}></Route>
      </Routes>
      <Home />
    </div>
  );
}

export default App;
