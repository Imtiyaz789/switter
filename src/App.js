import './App.css';
import Card from './components/Card';
import Album from './components/Album';
import { Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/:id/albums' element={<Album />} />
        <Route path='/albums/:id/photos' element={<Gallery />} />
      </Routes>

    </div>
  );
}

export default App;
