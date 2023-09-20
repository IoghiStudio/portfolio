"use client";
import Link from 'next/link';
import './Menu.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
    id: 4,
    name: 'Blog',
    routePath: '/blog/',
    path: 'blog'
  },
  {
    id: 5,
    name: 'Contact',
    routePath: '/contact/',
    path: 'contact'
  },
]

type Props = {
  forSidebar?: boolean;
};

export const Menu: React.FC<Props> = ({ 
  forSidebar=false
}) => {
  const [pathName, setPathName] = useState<string | null>(null);

  const pathname: string = usePathname();
  const selectedRouteArr: string[] = pathname.split('/');
  const selectedPath: string = selectedRouteArr[selectedRouteArr.length - 1];

  useEffect(() => {
    setPathName(selectedPath);
  })

  
  return (
    <div className="menu">
      <div className="menu__logo">

      </div>

      <div className="menu__pages">
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
              className={cn(
                "menu__pages-item",
                {
                  "menu__pages-item--active": pathName === path
                }
              )}
            >
              {name}
            </Link>
          )
        })}
      </div>

      <div className="menu__social">
        <Link
          target='_blank'
          href={SocialLinks.Linkedin}
          className="menu__social-icon menu__social-icon--linkedin"
          />

        <Link 
          href={SocialLinks.Github}
          target='_blank'
          className="menu__social-icon menu__social-icon--github"
        />
      </div>
    </div>
  )
};
