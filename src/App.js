
import './App.css';
import Header from './proekt/header/Header';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import Baner from './proekt/baner/Baner';
import Text from './proekt/text/Text';
import TelAll from './proekt/tel/TelAll';
import Footer from './proekt/footer/footer';
import Cardall from './proekt/cart/cardall';
import React from 'react';
import { useState } from 'react';
import Favorites from './proekt/favorites/favorites';
function App() {

  const AppContex = React.createContext({});
  // State для хранения товаров
  const[products,setProducts] = useState([]);
  // State состояния корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  // State для хранения товаров в корзине
  const [cartItems, setCartItems] = React.useState([]);
  // State для добвления товаров в избранное
  const [favoritesItems, setFavoritesItems] = React.useState([]);
 // State для поиска
 const [search, setSearch] = React.useState('');
// state для хранения состояния загрузки
const [loading, setLoading] = React.useState(true);


React.useEffect(() => {
  async function axiosData() {
    const cartData = await axios.get('https://63519153dfe45bbd55c3ba90.mockapi.io/cart');
    const favoritesData = await axios.get('https://63519153dfe45bbd55c3ba90.mockapi.io/fovarites');
    const productsData = await axios.get('https://63519153dfe45bbd55c3ba90.mockapi.io/products');

    setLoading(false)

    setCartItems(cartData.data);
    setFavoritesItems(favoritesData.data);
    setProducts(productsData.data);
  }
  axiosData()
}, [])


const onRemovCartitem = (id) =>{
  axios.delete(`https://63519153dfe45bbd55c3ba90.mockapi.io/cart/${id}`)
     setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
}
    return(
    <AppContex.Provider>
    <div className="app">
  


      { cartOpened? <Cardall 
           onRemovCartitem={onRemovCartitem}
           cartItems={cartItems}  
           closeCart={ () => setCartOpened(false)}
           totalPrice={cartItems.reduce((totalElements, objs) => totalElements + objs.prise, 0)}
           /> : null}

       <Header openCart={ () => setCartOpened(true) } cartItems={cartItems} />
        <Routes>
          <Route path='/favorites' element={
            <Favorites 
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
          />
          <Route path='/' element={
            <><Baner/>
            <Text/>
            <TelAll 
               cartItems = {cartItems} 
               setCartItems = {setCartItems} 
               favoritesItems={favoritesItems}
               setFavoritesItems={setFavoritesItems}
               items = {products}
               setSearch = {setSearch}
               search = {search}
               loading={loading}
               /></>
          }
          />
        </Routes>
      <Footer />
    </div>  
    </AppContex.Provider> 
    )
}

export default App
