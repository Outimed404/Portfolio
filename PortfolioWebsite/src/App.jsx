import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar.jsx'
import Test from './Test.jsx';
import Parallax from './components/parallax/Parallax.jsx';
import {motion} from "framer-motion"
import Services from './components/services/Services.jsx';
import Contact from './components/contact/Contact.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
const App = () => {
  return <div>
    <section id="Homepage"> <Navbar/> <Hero/> </section>
    
    <section id="About me"><Parallax type="services"/></section>
    <section> <Services/> </section>
    <section id="My Experience"><Parallax type="portfolio"/></section>
    <Portfolio/> 
    <section id="Contact"> <Contact/> </section>
  </div>;
};

export default App;
