import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Work from './pages/work';
import Coinmax from './pages/case-studies/coinmax';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/casestudy/coinmax" element={<Coinmax/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;