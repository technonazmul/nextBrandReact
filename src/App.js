import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Service/Services';
import Slider from './components/Slider/Slider';
import Portfolios from './components/Portfolio/Portfolios';
import About from './components/About/About';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Slider/>
        <Services/>
        <Portfolios/>
        <About/>
        <Team/>
    </div>
  );
}

export default App;
