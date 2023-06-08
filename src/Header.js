import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{cart , user} , dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img 
            className='header_logo' 
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
            <span className = "header_optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
            <span className = "header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <Link to={user? '/orders' : '/login'}>
        <div className="header_option">
            <span className = "header_optionLineOne">Returns</span>
            <span className = "header_optionLineTwo">& Orders</span>
        </div>
        </Link>

        <div className="header_option">
            <span className = "header_optionLineOne">Your</span>
            <span className = "header_optionLineTwo">Prime</span>
        </div>
        <Link to= {user? '/checkout' : '/login'}>
        <div className='header_optionBasket'>
            <AddShoppingCartIcon/>
            <span className='header_option
            LineTwo header_basketCount'>{!user ? 0 : cart?.length}</span>
        </div>
        </Link>

       </div>

    </div>
  )
}

export default Header
