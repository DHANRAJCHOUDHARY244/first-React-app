import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Program from './components/Program/Program.jsx';
import Reason from './components/Reason/Reason';
import Plans from './components/Plans/Plans';
import Testmonial from './components/Testmonial/Testmonial';
import Join from './components/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testmonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
