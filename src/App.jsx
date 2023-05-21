import './App.css'
import About from './components/About us/About';
import AddCategory from './components/Admin/AddItems/AddCategory';
import AddGalleryImage from './components/Admin/AddItems/AddGalleryImage';
import AddProducts from './components/Admin/AddItems/AddProducts';
import AddType from './components/Admin/AddItems/AddType';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact us/Contact';
import { useUserContext } from './components/Context/useUserContext';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import ProductsList from './components/Products/Types/ProductsList/ProductsList';
import Types from './components/Products/Types/Types';
import Signup from './components/Signup/Signup';
import Cart from './components/User/Cart';
import Checkout from './components/User/Checkout';
import OrderDetails from './components/User/OrderDetails';
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const {user} = useUserContext();
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {!user && <Route path='/login' element={<Login/>}></Route>}
          {!user && <Route path='/signup' element={<Signup/>}></Route>}
          {user && 
            <>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/orders' element={<OrderDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            </>
          }
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/types/:category' element={<Types/>}></Route>
          <Route path='/productslist/:type' element={<ProductsList/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {user=="KAVIPRIYA M" &&
            <>
            <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/addcategory' element={<AddCategory/>}></Route>
          <Route path='/admin/addtype' element={<AddType/>}></Route>
          <Route path='/admin/addproduct' element={<AddProducts/>}></Route>
          <Route path='/admin/addgalleryimages' element={<AddGalleryImage/>}></Route>
            </>
          }
          <Route path="*" element={<Home/>}></Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
