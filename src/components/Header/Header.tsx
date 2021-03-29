import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from './assets/x.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import './Header.scss';

interface MenuItem {
  title: string;
  to: string;
  pageTitle: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Services',
    to: '/services',
    pageTitle: 'Welcome'
  },
  {
    title: 'Clients',
    to: '/clients',
    pageTitle: 'Welcome'
  },
  {
    title: 'About us',
    to: '/about',
    pageTitle: 'About'
  },
  {
    title: 'Members',
    to: '/',
    pageTitle: 'Welcome'
  },
  {
    title: 'Contacts',
    to: '/contacts',
    pageTitle: 'Welcome'
  }
];

const Header: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="header">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <CloseMenu className="menu-icon" /> : <MenuIcon className="menu-icon" />}
      </div>

      <ul className={click ? 'nav-options active' : 'nav-options'}>
        {menuItems.map((item) => (
          <Link key={item.title} to={item.to} component={NavLink} className="link" onClick={closeMobileMenu}>
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
