import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Work from './pages/work';
import Coinmax from './pages/case-studies/coinmax';
import Coinshift from './pages/case-studies/coinshift';
import Drives from './pages/case-studies/drives';
import Coinshop from './pages/case-studies/coinshop';
import PageNotFound from './components/pageNotFound';

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
        <Route path="/casestudy/coinshift" element={<Coinshift/>} />
        <Route path="/casestudy/coinshop" element={<Coinshop/>} />
        <Route path="/casestudy/Drives" element={<Drives/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;