import React from 'react';
import './Header.modules.css';
import igniteLogo from '../assets/igniteLogo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={igniteLogo} alt="Logo-ignite" />
    </header>
  );
}
