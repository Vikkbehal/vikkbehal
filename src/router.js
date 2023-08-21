import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Work from './pages/work';
import Resume from './pages/resume';
import Coinmax from './pages/case-studies/coinmax';
import Coinshift from './pages/case-studies/coinshift';
import Drives from './pages/case-studies/drives';
import Coinshop from './pages/case-studies/coinshop';
import PageNotFound from './components/pageNotFound';
import Resources from './pages/resources';

import Header from "./components/header";
import Footer from "./components/footer";

function Router() {
  return (
    <BrowserRouter>
    <div className='AppWrapper'>
      {/* <div className='relative'>
        <img src={blob2} className="absolute" style={{top:"-100vh",left:"-45%", zIndex:-1}}/>
        <img src={blob1} className="absolute" style={{top:"20vh",right:"-40%", zIndex:-1, opacity:0.5 }}/>
      </div> */}
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/casestudy/01" element={<Coinmax/>} />
        <Route path="/casestudy/02" element={<Coinshop/>} />
        <Route path="/casestudy/03" element={<Drives/>} />
        <Route path="/casestudy/04" element={<Coinshift/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default Router;