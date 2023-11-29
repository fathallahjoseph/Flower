import React from 'react';
import Catalogue from './Catalogue';
import Panier from './Panier';
import Accueil from './Flower';

const Header = () => {
  return (
    <header>
      <h1>Mon Fleuriste</h1>
      <nav>
        <ul>
          <Accueil/>
          <Catalogue/>
          <Panier/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;