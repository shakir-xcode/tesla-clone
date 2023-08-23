import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (

    <div className=' mx-auto relative' >
      <Navbar />
      <Home />
      <Footer />
    </div>


  );
}

export default App;
