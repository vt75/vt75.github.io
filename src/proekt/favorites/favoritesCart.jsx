import React from 'react';
import { useState } from 'react';

const FavoritesCard = (props) =>{ 

    const [added, setAdded] = useState(false)
    // const [favorite, setFavorite] = useState(false)
  
    const onClickPlus = () => {
      let id = props.id
      let title = props.title
      let description = props.desc
      let price = props.price
      let img = props.LogoPl 
  
      props.onPlus({id, title, description, price, img});
  
      setAdded(!added);
    }
  
    const onClickFavorite = () => {
      props.onFavorite(props.id);
    }
  
    return(
        <div className='tel_fav'>

         <button  className='favorite-btn' onClick={onClickFavorite}  > Убрать с избранного</button>
      

        <img className='tel-baner' src={props.LogoTel}/>
        <div className='tel-text'>
           <h2>{props.title}</h2>
           <p>{props.desc}</p>
        </div>
        <div className='tel-bottom'>
            <div className='tel-text'>
                <p>Цена</p>
                <h2>{props.prise} руб.</h2>
            </div> 
            <button className='tel-baner-pl' onClick={onClickPlus}>
            <img src={ added? props.Check :  props.LogoPl} />
            </button>   
        </div>
     </div>
        )
}

export default FavoritesCard