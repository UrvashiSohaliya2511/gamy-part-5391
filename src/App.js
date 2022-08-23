import './App.css';
import Footer from './componants/Footer';
import Navbar from './componants/Navbar';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
