
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title="Nayyer Ali"/>
   <div className="container my-3">
    
    
    <TextForm heading="Enter Text Below To Analyse" />
    </div>

    </>
  );
}

export default App;
