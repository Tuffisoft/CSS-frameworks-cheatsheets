import Navbar from '../components/Navbar.jsx'
import Cards from '../components/Cards.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import '../components/Navbar.css';
import Footer from '../components/footer.jsx';

function App() {

  return (
    <div className="home">
        <Navbar />
    <div>
    <img className="header-image" src="./public/design-html-web-design-template-concept.jpg"></img>
      <div className="home-body">
        <h1>4 CSS Framework Cheat Sheets</h1>
        <Cards />
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
