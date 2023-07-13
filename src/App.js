import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Contect from './Pages/Contect';
import CompareProduct from './Pages/CompareProduct';
import Whishlist from './Pages/Whishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Singup from './Pages/Singup';
import SingleBlog from './Pages/SingleBlog';
import Privercypolicy from './Pages/Privercypolicy';
import Refundpolicy from './Pages/Refundpolicy';
import TearmandCondition from './Pages/TearmandCondition';
import Shippingpolicy from './Pages/Shippingpolicy';
import SingleProduct from './Pages/SingleProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/store' element={<OurStore/>} />
      <Route path='/product/:id' element={<SingleProduct/>} />
      <Route path='/blogs' element={<Blog/>} />
      <Route path='/blog/:id' element={<SingleBlog/>} />
      <Route path='/contact' element={<Contect/>} />
      <Route path='/compareproduct' element={<CompareProduct/>} />
      <Route path='/Whishlist' element={<Whishlist/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgot-pass' element={<ForgotPassword/>} />
      <Route path='/Singup' element={<Singup/>} />
      <Route path='/Privercypolicy' element={<Privercypolicy/>} />
      <Route path='/Refundpolicy' element={<Refundpolicy/>} />
      <Route path='/TearmandCondition' element={<TearmandCondition/>} />
      <Route path='/Shippingpolicy' element={<Shippingpolicy/>} />

      </Route >
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
