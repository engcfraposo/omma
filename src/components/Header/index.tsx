import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import "./styles.css"
import * as S from "./styled"

const Header: React.FC = () => {

  const location = useLocation()
  useEffect(()=>{console.log(location.pathname)},[location.pathname])
  return (
    <header>
    <div className="logo-area">
      <img src={logo} alt="omma" />
    </div>
    <nav className="menu">
      <ul>
        <li >
          <S.MenuLink active={location.pathname}to="/">Inicio</S.MenuLink>
        </li>
        <li>
          <S.MenuLink active={location.pathname}to="/receitas">Receitas</S.MenuLink>
        </li>
        <li>
          <S.MenuLink active={location.pathname}to="/contatos">Contato</S.MenuLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;