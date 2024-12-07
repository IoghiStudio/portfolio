"use client";
import Link from 'next/link';
import './Nav.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/context/MenuContext/store';

enum SocialLinks {
  Linkedin = 'https://www.linkedin.com/in/nicusor-iorga/',
  Github = 'https://github.com/IoghiStudio',
};

interface RouteData {
  id: number;
  name: string;
  routePath: string;
  path: string;
};

const routesData: RouteData[] = [
  {
    id: 1,
    name: 'Home',
    routePath: '/home/',
    path: 'home'
  },
  {
    id: 2,
    name: 'About',
    routePath: '/about/',
    path: 'about'
  },
  {
    id: 3,
    name: 'Portfolio',
    routePath: '/portfolio/',
    path: 'portfolio'
  },
  {
    id: 5,
    name: 'Contact',
    routePath: '/contact/',
    path: 'contact'
  },
];

type Props = {
  forSidebar?: boolean;
};

export const Nav: React.FC<Props> = ({
  forSidebar=false
}) => {
  const [pathName, setPathName] = useState<string | null>(null);
  const [routeHoveredId, setRouteHoveredId] = useState<number>(0);
  const {
    setIsMenuOpened
  } = useAppContext();

  const pathname: string = usePathname();
  const selectedRouteArr: string[] = pathname.split('/');
  const selectedPath: string = selectedRouteArr[selectedRouteArr.length - 1];

  useEffect(() => {
    setPathName(selectedPath);
  })

  return (
    <div className={cn(
      "nav",
      {
        "nav--forSidebar": forSidebar,
      }
    )}>
      <div className={cn(
        "nav__logo",
        {
          "nav__logo--disabled": !forSidebar
        }
      )}>
        <div className="nav__logo-img"/>

        <div className="nav__logo-name">
          Nicu
        </div>
      </div>

      <div className={cn(
        "nav__pages",
        {
          "nav__pages--forSidebar": forSidebar,
        }
      )}>
        {routesData.map(route => {
          const {
            id,
            name,
            routePath,
            path,
          } = route;

          return (
            <Link
              key={id}
              href={routePath}
              onClick={() => setIsMenuOpened(false)}
              onMouseEnter={() => setRouteHoveredId(id)}
              onMouseLeave={() => setRouteHoveredId(0)}
              className={cn(
                "nav__pages-item",
                {
                  "nav__pages-item--forSidebar": forSidebar,
                }
              )}
            >
              <div className={cn(
                "nav__pages-icon",
                `nav__pages-icon--${path}`,
                {
                  [`nav__pages-icon--${path}--active`]: pathName === path || routeHoveredId === id,
                  "nav__pages-icon--forSidebar": forSidebar,
                  "nav__pages-icon--sidebar-hover": routeHoveredId === id && forSidebar,
                }
              )}/>

              <div className={cn(
                "nav__pages-text",
                {
                  "nav__pages-text--selected": pathName === path && !forSidebar,
                  "nav__pages-text--forSidebar": forSidebar,
                  "nav__pages-text--active": routeHoveredId === id
                }
              )}>
                {name}
              </div>
            </Link>
          )
        })}
      </div>

      <div className={cn(
        "nav__social",
        {
          "nav__social--forSidebar": forSidebar
        }
      )}>
        <Link
          target='_blank'
          href={SocialLinks.Linkedin}
          className="nav__social-icon nav__social-icon--linkedin"
          />

        <Link
          href={SocialLinks.Github}
          target='_blank'
          className="nav__social-icon nav__social-icon--github"
        />
      </div>
    </div>
  )
};
