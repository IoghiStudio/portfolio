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
        Nicusor Iorga
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