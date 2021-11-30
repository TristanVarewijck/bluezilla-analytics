
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Market from './components/Market/Market'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




// This is a compenent that returns the whole app
function App() {
  return (
    <Router>
      < div className="App" >
        <Header />
        <div className='content'>
          <Routes>
            <Route className='homeRoute' path="/" element={<Home />} />
            <Route className='marketRoute' path="/market" element={<Market />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;