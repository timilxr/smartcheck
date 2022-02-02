import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './pages/home';
import Application from './pages/application';
import Server from './pages/server';
import Giphy from './pages/giphy';
import GiphyProvider from './contexts/giphy.context';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/server" element={<Server />} />
          <Route path="/giphy" element={<GiphyProvider>
            <Giphy />
          </GiphyProvider>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
