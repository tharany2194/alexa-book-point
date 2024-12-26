import { useContext } from 'react';
import './Header.css'
import PropTypes from 'prop-types';
import { StoreContext } from '../context/StoreContext';
import profileIcon from '../../assets/profile_icon.png'
import logoutIcon from '../../assets/logout-icon.png'
import {useNavigate} from 'react-router-dom'

//import headerImg from '../../assets/header-img.png'

const Header = ({setShowLogin}) => {
  const {token,setToken} = useContext(StoreContext)
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }
  return (
    <div className='header'>
        <div className="header-contents">
            <h2 className="header-heading">The Book Lover&apos;s Dreamland Awaits!</h2>
            <p className="header-text">Welcome to the ultimate book lover&apos;s paradise! Join our community and contribute to the ever-evolving library of stories,where every book has a chance to inspire someone new.</p>
            {!token?<button onClick={()=>setShowLogin(true)} className="sign-in">Sign In</button>
            :<div className='header-profile'><img src={profileIcon} alt='profile-icon' />
            <ul className='profile-dropdown'>
                
                <li onClick={logout}><img src={logoutIcon} alt='logout' /><p>Logout</p></li>
            </ul>
            </div>}
            
        </div>
      
    </div>
  )
}
Header.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // or PropTypes.func if it's optional
};


export default Header
