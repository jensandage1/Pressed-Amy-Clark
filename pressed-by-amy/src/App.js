import './App.css';
import Homepage from "./components/pages/Homepage";
import NavHeader from "./components/Navbar";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Routes>
        <Route path="/" element={<Homepage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
