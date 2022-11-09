import React from "react";

const Tel = (props) =>{

    const [added, setAddet] = React.useState(props.isAdded);
    const [fav, setFav] = React.useState(props.isFavorite);

    const onClickPlus = () =>{
        let id = props.id
        let myId = props.myId
        let title = props.title;
        let desc = props.desc;
        let prise = props.prise;
        let LogoPl = props.LogoPl;
        
        props.onPlus({id, myId,title,desc,prise,LogoPl});
        setAddet(!added)
    }
    
    const onClickFav = () =>{
        let title = props.title;
        let desc = props.desc;
        let prise = props.prise;
        let LogoPl = props.LogoPl;
        
        props.onFav({title,desc,prise,LogoPl});
        setFav(!fav)
    }
    


    return(
        <div className='tel'>

        {
        fav ===true? <button  className='favorite-btn_' onClick={onClickFav} >Товар добавлен в избранное</button> 
         : <button  className='favorite-btn' onClick={onClickFav}  > Добавить в избранное</button>
         
        }  

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
     </div>)
}
export default Tel