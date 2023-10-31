'use client';
import { WordsLine } from '@/types/WordsLine';
import './Portfolio.scss';
import { useCallback, useEffect, useState } from 'react';
import { TagType, TagWrapper } from '../TagWrapper';
import classNames from 'classnames';
import Link from 'next/link';

const wordsLines: WordsLine[] = [
  {
    id: '1',
    words: [
      {
        id: '1',
        chars: 'Portfolio'.split('').map((char, i) => ({
          id: String(i + 1),
          char,
        }))
      },
    ]
  },
];

interface PortfolioProject {
  id: string;
  title: string;
  img: string;
  descriptions: string[];
  techstack: string[]
  demo: string;
  code: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Job Platform',
    img: 'jobs',
    descriptions: ['Job platform for candidates and companies, mobile first, responsive UI, more than 50 pages, 2 dashboards, 2 homepages, 16 steps register flow for candidates and more', 'Recommended path: candidates page => signup => register flow steps => candidates dashboard, pass payment with fake stripe card: 4242 4242 4242 4242 any end-date/CVC', 'Repository private, contact me for more'],
    techstack: ['Next.js,', 'Typescript,', 'Scss,', 'Rest Api,', 'Axios,', 'Express.js,', 'PostgreSql'],
    demo: 'http://staging.videoworkers.com/',
    code: 'https://github.com/IoghiStudio/jobs-platform'
  },
  {
    id: '2',
    title: 'Apple Store',
    img: 'apple',
    descriptions: ['Online store with apple products, responsive UI', 'Few functionalities like add to cart/favorites, pagination, product details'],
    techstack: ['React.js,', 'Typescript,', 'Scss'],
    demo: 'https://ioghistudio.github.io/product-catalog/',
    code: 'https://github.com/IoghiStudio/product-catalog'
  },
  {
    id: '3',
    title: 'Upwork Homepage',
    img: 'upwork',
    descriptions: ['Upwork clean implementation of the homepage, desktop version only'],
    techstack: ['React.js,', 'Typescript,', 'Scss'],
    demo: 'https://ioghistudio.github.io/upwork-homepage/',
    code: 'https://github.com/IoghiStudio/upwork-homepage'
  },
];

export const Portfolio = () => {
  const [timer, setTimer] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleTimer = useCallback(() => {
    const id = setInterval(() => {
      let count: number;

      setTimer((state) => {
        count = state + 1;
        console.log(count);
        return count;
      });

    }, 200);

    setIntervalId(id);
  }, []);

  useEffect(() => {
    console.log('ONLY TRUE DEVELOPERS CHECK THE CONSOLE!');
    handleTimer();

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        setTimer(0);
      }
    };
  }, []);

  useEffect(() => {
    if (timer === 10 && intervalId !== null) {
      console.log('timer is 10!');
      clearInterval(intervalId);
      setTimer(0);
    }
  }, [timer, intervalId]);

  return (
    <div className="portfolio">
      <h1 className='portfolio__title'>
        <TagWrapper tagType={TagType.H1}>
          {wordsLines.map((wordsLine) => {
            const { id, words } = wordsLine;

            return (
              <div key={id} className='portfolio__title-words'>
                {words.map(word => (
                  <div key={word.id} className="portfolio__title-word">
                    {word.chars.map(ch => (
                      <span key={ch.id} className={classNames('portfolio__title-ch' , {
                        'portfolio__title-ch--active': timer === +ch.id,
                      })}>
                        {ch.char}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )
          })}
        </TagWrapper>
      </h1>

      <div className="portfolio__projects">
        {portfolioProjects.map(project => {
          const {
            id,
            title,
            img,
            descriptions,
            techstack,
            demo,
            code,
          } = project;

          return (
            <div key={id} className={classNames("portfolio__project")}>
              <div className="portfolio__name">
                {title}
              </div>

              <div className={classNames("portfolio__project-content", {
                "portfolio__project-content--reversed": +id % 2 === 0
              })}>
                <div className={classNames(
                  "portfolio__image",
                  `portfolio__image--${img}`
                )}/>

                <div className="portfolio__project-details">
                  <div className="portfolio__descriptions">
                    {descriptions.map(description => (
                      <div key={description} className="portfolio__description">
                        {description}
                      </div>
                    ))}
                  </div>

                  <div className="portfolio__techstack">
                    <div className="portfolio__techstack-title">
                      TechStack:
                    </div>

                    <div className="portfolio__techstack-list">
                      {techstack.map(tech => (
                        <div key={tech} className="portfolio__techstack-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio__links">
                    <Link
                      href={demo}
                      target='_blank'
                      className="portfolio__link portfolio__link--demo"
                      >
                      Demo
                    </Link>

                    <Link
                      href={code}
                      target='_blank'
                      className="portfolio__link portfolio__link--code"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
