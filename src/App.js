import About from './components/About';
import Conatct from './components/Conatct';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';
import { useEffect , useState } from 'react';
import Resume from './components/Resume';


function App() {

  let [theme , setTheme] = useState('dark')

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const ThemeHandler =()=>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="App bg-white dark:bg-black">
      <Navbar theme={theme} ThemeHandler={ThemeHandler}/>
      <Home/>
      <About theme={theme}/>
      <Experience/>
      <Portfolio/>
      <Resume theme={theme}/>
      <Conatct/>
      <Footer/>
    </div>
  );
}

export default App;
