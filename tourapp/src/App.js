import Home from './Components/home/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
