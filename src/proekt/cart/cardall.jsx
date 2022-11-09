import Cart from "./cart"


const Cardall = (props) =>{
    return(
        <div className='overlay'>
        <div className='cart'>
          <div className='title-block'>
             <h2>Корзина</h2>
             <button className='clouz-btn' onClick={props.closeCart}>X</button>
          </div>

          {   
                props.cartItems.length > 0 ? 
                
                    <div className="cart-block">
          {
            props.cartItems.map(obj => {
              return(
                <Cart 
                      key = {obj.id} 
                      id = {obj.id} 
                      title = {obj.title} 
                      desc = {obj.desc}  
                      prise = {obj.prise} 
                      onRemovCartitem = {props.onRemovCartitem}  />
              ) 
            })
          }
          </div>
                : <div className='title-block'>
                      <h3>  Ваша корзина пуста</h3>
                  </div>
            }
          <div className='total-price'>
             <p className='total-price-text'>Итог:</p>
             <p className='total-price-summ'>{props.totalPrice} руб.</p>
             <button >Заказать</button>
          </div>

        </div>
     </div>
        )
}
export default Cardall