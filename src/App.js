import HeadresComponents from './Components/HeadersComponents/HeadersComponent'
import './App.css';
import AboutUs from './Components/BodyComponent/AboutUs';
import Portfolio from './Components/BodyComponent/portfolio';
import Contact from './Components/BodyComponent/Contact';
import Footer from './Components/BodyComponent/Footer';

function App() {
  return (
    <>
    <HeadresComponents />
    <AboutUs />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
