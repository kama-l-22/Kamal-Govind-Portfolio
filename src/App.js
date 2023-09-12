
import './App.scss'
import Hero from './component/Hero';
import Skillset from './component/skillset';
import Contact from './component/contact';
import Footer from './component/footer';
import AOS from "aos";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Hero/> 
    <Skillset/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
