"use client";
import './Menu.scss';
import cn from "classnames";
import { Nav } from "../Nav";
import { useAppContext } from "@/context/MenuContext/store";

export const Menu = () => {
  const {
    isMenuOpened
  } = useAppContext();

  return (
    <div className={cn(
      "menu",
      {
        "menu--active": isMenuOpened
      }
    )}>
      <Nav />
    </div>
  )
};

