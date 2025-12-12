import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './screens/Home/Home';
import ErrorPage from './screens/ErrorPage/ErrorPage';
import SubscribeUs from './screens/SubscribeUs/SubscribeUs';
import ComingSoon from './screens/ComingSoon/ComingSoon';
import FAQ from './screens/FAQ/FAQ';
import Contact from './screens/Contact/Contact';
import AboutUs from './screens/AboutUs/AboutUs';
import Agents from './screens/Agents/Agents';
import AgentSingle from './screens/AgentSingle/AgentSingle';
import Properties from './screens/Properties/Properties';
import SingleProperty from './screens/SingleProperty/SingleProperty';
import Blogs from './screens/Blogs/Blogs';
import SingleBlog from './screens/SingleBlog/SingleBlog';
import PropertyPost from './screens/PropertyPost/PropertyPost';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/subscribe" element={<SubscribeUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentSingle />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/property-post" element={<PropertyPost />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;