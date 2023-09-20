import React, { useState} from 'react';
import {Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [color, setColor]= useState (false);

  const changeBackground= () => {
    if(window.scrollY>= 90){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  React.useEffect(()=>{
    window.addEventListener('scroll',changeBackground);
  }, []);


  return (
    <>
      <nav className={color ? 'navbar active': 'navbar'}>
        <div className='navbar-container'>
          <Link to='hero' className='navbar-logo' spy={true} smooth={true} offset={-100} duration={650}onClick={closeMobileMenu}>
            JS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="about" className='nav-links' spy={true} smooth={true} offset={-80} duration={650} onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='resume' className='nav-links' spy={true} smooth={true} offset={-80} duration={650}onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='projects' className='nav-links' spy={true} smooth={true} offset={-80} duration={650} onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact' className='nav-links' spy={true} smooth={true} offset={-80} duration={650} onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
