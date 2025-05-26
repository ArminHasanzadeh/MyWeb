import {Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Work from './Pages/WorkPage/Work';
import Header from './Pages/HomePage/header/Header';
import Footer from "./Pages/HomePage/Footer/Footer";

function App() {
  return (
    <BrowserRouter> 
    <Header />   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
