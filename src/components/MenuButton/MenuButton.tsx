"use client";
import { useState } from 'react';
import './MenuButton.scss';
import cn from 'classnames';

type Props = {
  
}

export const MenuButton: React.FC<Props> = () => {
  const [onHover, setOnHover] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  
  return (
    <div
      className="menu-button"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={cn(
        "menu-button__line",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-1": isActive,
        }
      )}/>

      <div className={cn(
        "menu-button__line",
        "menu-button__line--2",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-2": isActive,
        }
      )}/>

      <div className={cn(
        "menu-button__line",
        {
          "menu-button__line--hover": onHover,
          "menu-button__line--active-3": isActive,
        }
      )}/>
    </div>
  )
}