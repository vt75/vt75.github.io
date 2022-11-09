import Tel from "./Tel";
import LogoTel from '../public/iphone-1.png';
import LogoPl from '../public/icons-pl.png';
import Search from '../public/search.png';
import Check from '../public/check.png';
import axios from 'axios';

const TelAll = (props) =>{


  const onAddToCart = async (objCart) => {
    try{
      const findCartItem = props.cartItems.find((cartItem) => cartItem.title === objCart.title)
      if ( findCartItem ){
        axios.delete(`https://63519153dfe45bbd55c3ba90.mockapi.io/cart/${findCartItem.id}`)
        props.setCartItems(prev => prev.filter(cartItem => cartItem.title !== objCart.title))
      } else {
        const { data } = await axios.post('https://63519153dfe45bbd55c3ba90.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, data]);
      }
    }
    catch{
      alert('Не удалось добавить товар в корзину')
    }
  } 

  const onAddToF = async (objFavorite) => {
    try{
      const findFavotiteItem = props.favoritesItems.find(favoriteItem => favoriteItem.title === objFavorite.title)
      if ( findFavotiteItem ) {
        axios.delete(`https://63519153dfe45bbd55c3ba90.mockapi.io/fovarites/${findFavotiteItem.id}`)
        props.setFavoritesItems(prev => prev.filter(favoriteItem => favoriteItem.title !== objFavorite.title))
      }else{
        const { data } = await axios.post('https://63519153dfe45bbd55c3ba90.mockapi.io/fovarites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, data]);
      }
    }
    catch{
      alert('Не удалось добавить товар в избранное')
    }
  }


  const onSeartInPut = (inputValue) =>{
     props.setSearch(inputValue.target.value);
  }
    return(
    <div className='tel-sec'>
      <div className="search">
        <h2>{props.search ? 'Поиск по запросу ' + props.search :
          'Все смартфоны'}</h2>
        <div className="search-block"> 
           <img src={Search} alt="search"/>
           <input onChange={onSeartInPut}  placeholder="Поиск по товарам"/>
        </div>
      </div>
        <div className='tel-all'>
          {
            props.items.filter((item) => item.title.includes(props.search))
            .map(obj => {
              return(
                <Tel 
                   id={obj.id} 
                   myId={obj.myId} 
                   title = {obj.title} 
                   desc = {obj.desc}  
                   prise = {obj.prise}  
                   LogoTel = {LogoTel} 
                   LogoPl = {LogoPl}
                   Check = {Check}
                   isLoading={props.loading}
                   isAdded={props.cartItems.some((objIsAdded) => objIsAdded.title === obj.title)}
                   isFavorite={props.favoritesItems.some((objIsFavorite) => objIsFavorite.title === obj.title)}
                    
                   onPlus = {
                    (cartObj)=>{
                      onAddToCart(cartObj);
                    }
                  }
                  onFav = {
                    (cartObj)=>{
                      onAddToF(cartObj);
                    }
                  }
                   />
                    ) 
               })
          } 

          
        </div>
    </div>
     ) 
     
     
}
export default TelAll