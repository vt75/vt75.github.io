import { Link } from 'react-router-dom'

const Header = (props) =>{
    return(
       <header>
         <h1 className = 'logo'>ITECH</h1>
         <nav>
         <Link to='/favorites'>
            <a className='nav-item'>ИЗБРАННОЕ</a>
         </Link>
            <a className='nav-item' onClick={props.openCart}>КОРЗИНА</a>
         </nav>
       </header>)
}
export default Header