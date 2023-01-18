import About from './components/About';
import Conatct from './components/Conatct';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Conatct/>
      <Footer/>
    </div>
  );
}

export default App;
