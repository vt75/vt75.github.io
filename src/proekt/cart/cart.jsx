import LogoTel from '../public/iphone-1.png';

const Cart = (props) =>{
    return(
        <div className='cart-list'>
              <div className='cart-item'>
                  <img className='cart-img' src={LogoTel} alt=''/>
                  <h3 className='cart-title'> {props.title} <br/>
                  <span className='cart-price'>{props.prise} руб.</span>
                  </h3>
                  <button  onClick={()=>props.onRemovCartitem(props.id)}   className='clouz-btn'>X</button>
              </div>
           </div>
        )
}
export default Cart