import {Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Work from './Pages/WorkPage/Work';
import Header from './Pages/HomePage/header/Header';
import Footer from "./Pages/HomePage/Footer/Footer";
import About from './Pages/about-me/About';
import Content from './Pages/content/Content';

function App() {
  return (
    <BrowserRouter> 
    <Header />   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
