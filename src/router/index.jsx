import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const router = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
    </>
  );
};

export default router;