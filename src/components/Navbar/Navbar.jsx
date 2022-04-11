import React, {useState} from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { GiBookmarklet } from 'react-icons/gi';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {  
  const [toggleMenu , setToggleMenu] = useState(false);
  return (
  <nav className="app__navbar">
    <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/">BookMarks</Link></li>
    </ul>
    <div className="app__navbar-login">
        <a href='#login'  className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Find Book</a>
    </div>
    <div className="app__navbar-smallscreen">
        <GiBookshelf color="#fff" fontSize ={27} onClick={() => setToggleMenu(true)} />
        
      { toggleMenu && (
       <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" >
            <GiBookmarklet  fontSize={27} className="overlay__close" onClick={()=> setToggleMenu(false)} />  
      <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/">BookMarks</Link></li>
      </ul>
      </div>  
    
      )}
    </div>
  </nav>
  )
}  

export default Navbar;
