import './App.css';
import Header from './comp/Header';
import Footer from './comp/Footer';
import ProductsDetail from './comp/products/ProductsDetail';
import Cart from './comp/cart/Cart';
import CartOrderOK from './comp/cart/CartOrderOk';
import Home from './comp/Home';
import ShowDB from './comp/cart/ShowDB'
import NotFound from './comp/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {

  const[loaded, setLoaded] = useState(false)

  let elemSum = 0;
  let [amount, setAmount] = useState(elemSum)
  const [counterAmount, setCounterAmount] = useState([])
  function getAmount(){ 
    countFetch()
    counterAmount.map(item => {
        elemSum += item.amount+0.5
    })
    setAmount(elemSum);
  }
  let [check, setCheck] = useState(false)
    // ! кол-во выбраных товаров из БД
    // ! срабатывает при ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ :=(
    async function countFetch() {
      try{
          const res = await axios.get("http://localhost:5000/showProdinCart");
          setCounterAmount(res.data)
      }catch(err) {console.log(err)}
    }
    useEffect(() => {
      getAmount();
      setLoaded(false)
  },[check]);
  // ! check render header amount
  function ChengeCheck(){
    if(check == false){
        setCheck(true)
    }else{setCheck(false)}
  }

  return (
      <>
        <BrowserRouter>
        <Header amount={amount}/>
          <Routes>
           <Route path='/'  element={<Home/>}/>
            <Route path='/productsDetail'  element={<ProductsDetail/>}/>
            <Route path='/cart' loaded={loaded} element={<Cart check={check} ChengeCheck={ChengeCheck} setCheck={setCheck} />}/>
            <Route path='/cartOrderOk' element={<CartOrderOK />} />
            <Route path='/showDB' element={<ShowDB />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <Footer />

      </>
  );
}

export default App;
