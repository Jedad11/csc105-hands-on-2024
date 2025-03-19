import './App.css'
import Navbar from './components/navbar';
import About from './pages/aboutme';
import Gallery from './pages/gallery';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
    </div>
  );
}

export default App
