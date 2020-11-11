import './header.css'
import menu from '../../assets/img/menu.svg'
import magnify from '../../assets/img/magnify.svg'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
function Header(){
    return (
        <div className="app-bar">
        <div className="app-bar-menu-icon-group"> <img src={menu} alt="logo"/></div>
       <div className="app-bar-avatar-search-group">

              <input className="app-bar-search-field" type="text" placeholder="Search..."/>
           <img className="app-bar-search-field-icon" src={magnify} alt="search-icon"/>  

          
           <div className="app-bar-user-account inline-style">
               <div className="user-text inline-style">Hii, Femi</div>
               <div className="inline-style"> 
                   <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="#AEAEAE"
              >
                <AccountCircle />
              </IconButton></div>
           </div>
       </div>
        </div>
        
    )
}

export default Header;