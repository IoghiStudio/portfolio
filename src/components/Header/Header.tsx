"use client";
import { MenuButton } from '../MenuButton';
import './Header.scss';
import cn from 'classnames';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo"></div>

      <div className="header__button">
        <MenuButton />
      </div>
    </div>
  )
}