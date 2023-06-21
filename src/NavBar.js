import React, { useEffect } from 'react';
import './NavBar.css'; 
import logo from './logo.png';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const existingLogo = document.querySelector('.logo');

    if (!existingLogo) {
      const logoImg = new Image();
      logoImg.src = logo;
      logoImg.alt = 'Logo';
      logoImg.classList.add('logo');

      navbar.insertAdjacentElement('beforebegin', logoImg);
    }
  }, []);

  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'ul',
      { className: 'navbar-nav' },
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          { className: 'nav-link', href: '#' },
          '🏠 Home'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          { className: 'nav-link', href: '#' },
          '🔎 Explore'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          { className: 'nav-link', href: '#' },
          '👤 Profile'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          { className: 'nav-link', href: '#' },
          '✉️ Messages'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          { className: 'nav-link', href: '#' },
          '🔒Login/Register'
        )
      )
    )
  );
};

export default Navbar;
