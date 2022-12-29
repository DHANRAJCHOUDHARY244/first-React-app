import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => setMenuOpened(true)}
          style={{ background: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: '1.5rem',
              height: '1.5rem',
              cursor: 'pointer'
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="header" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="program" span={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="Reason" span={true} smooth={true}>
              Why use
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plan" span={true} smooth={true}>
              {' '}
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to=" Testmonial" span={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
