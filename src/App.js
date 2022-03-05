import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Landing from './page/Landing';

const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
