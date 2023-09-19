import Link from 'next/link';
import './Menu.scss';
import cn from 'classnames';

enum SocialLinks {
  Linkedin = 'https://www.linkedin.com/in/nicusor-iorga/',
  Github = 'https://github.com/IoghiStudio',
};

interface RouteData {
  id: number;
  name: string;
  path: string;
};

const routesData: RouteData[] = [
  {
    id: 1,
    name: 'Home',
    path: '/home/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about/'
  },
  {
    id: 3,
    name: 'Portfolio',
    path: '/portfolio/'
  },
  {
    id: 4,
    name: 'Blog',
    path: '/blog/'
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact/'
  },
]

type Props = {
  forSidebar?: boolean;
};

export const Menu: React.FC<Props> = ({ 
  forSidebar=false
}) => {
  return (
    <div className="menu">
      <div className="menu__logo">

      </div>

      <div className="menu__pages">
        {routesData.map(route => {
          const {
            id,
            name,
            path,
          } = route;

          return (
            <Link
              key={id} 
              href={path}
              className="menu__page-item"
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
