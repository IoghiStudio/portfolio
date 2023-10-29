"use client";
import { useState } from 'react';
import './MenuButton.scss';
import cn from 'classnames';
import { useAppContext } from '@/context/MenuContext/store';

type Props = {

}

export const MenuButton: React.FC<Props> = () => {
  const [onHover, setOnHover] = useState<boolean>(false);

  const {
    isMenuOpened,
    setIsMenuOpened
  } = useAppContext();

  return (
    <div
      className={cn(
        "menu-button",
      )}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
    >
      <div className={cn(
        "menu-button__line",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-1": isMenuOpened,
        }
      )}/>

      <div className={cn(
        "menu-button__line",
        "menu-button__line--2",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-2": isMenuOpened,
        }
      )}/>

      <div className={cn(
        "menu-button__line",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-3": isMenuOpened,
        }
      )}/>
    </div>
  )
};
