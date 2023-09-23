"use client";
import { useAppContext } from '@/context/store';
import { MenuButton } from '../MenuButton';
import './Header.scss';
import cn from 'classnames';

export const Header = () => {
  const {
    isMenuOpened,
    setIsMenuOpened
  } = useAppContext();

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo"/>
        
        <div className="header__text">
          icu
        </div>
      </div>

      <div
        className="header__button"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <MenuButton />
      </div>
    </div>
  )
}