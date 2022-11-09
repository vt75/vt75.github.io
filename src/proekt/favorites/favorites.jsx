import React from "react"
import axios from "axios";
import LogoTel from '../public/iphone-1.png';
import LogoPl from '../public/icons-pl.png';
import Check from '../public/check.png';
import FavoritesCard from "./favoritesCart"
const Favorites = (props) =>{
    const onAddToCart = (objCart) => {
        axios.post('https://63519153dfe45bbd55c3ba90.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, objCart]);
    }
  
    const onRemoveFavorites = (id) => {
        axios.delete(`https://63519153dfe45bbd55c3ba90.mockapi.io/fovarites/${id}`)
        props.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    }
    return(
        <div>
            <h1>Избранные товары</h1>
            {props.favoritesItems.map( obj => {
              return(
                <FavoritesCard 
                  key={obj.id} 
                  id={obj.id}
                  title = {obj.title} 
                  desc = {obj.desc}  
                  prise = {obj.prise}  
                  LogoTel = {LogoTel} 
                  LogoPl = {LogoPl}
                  Check = {Check}
                  onFavorite={
                    (id) => {
                      onRemoveFavorites(id)
                    }
                  }
                  onPlus={
                    (cartObj) => {
                      onAddToCart(cartObj)
                    }
                  }
                />
              )
            } )}
        </div>
        
           
        




        )
}
export default Favorites