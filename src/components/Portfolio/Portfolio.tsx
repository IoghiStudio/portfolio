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
  codeAvailable: boolean;
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Job Platform',
    img: 'jobs',
    descriptions: ['I am the Frontend Engineer of the VideoWorkers platform. Revolutionary idea to connect companies and employees around the world, splitted into companies/candidates as a verified company creating announces and sending custom offers also as candidate apply to jobs and receive offers, chat/notification/subscription/invoices/filtering systems and many more, 80% of the platform is after subscription for candidates or after document verify as a company.'],
    techstack: ['Next.js,', 'Typescript,', 'Scss,', 'Rest Api'],
    demo: 'https://videoworkers.com/',
    code: 'https://github.com/IoghiStudio/jobs-platform',
    codeAvailable: false
  },
  {
    id: '2',
    title: 'Apple Store',
    img: 'apple',
    descriptions: ['Online store with apple products, responsive UI, few functionalities like add to cart/favorites, pagination, product details.'],
    techstack: ['React.js,', 'Typescript,', 'Scss'],
    demo: 'https://ioghistudio.github.io/product-catalog/',
    code: 'https://github.com/IoghiStudio/product-catalog',
    codeAvailable: true
  },
  {
    id: '3',
    title: 'Upwork Homepage',
    img: 'upwork',
    descriptions: ['Upwork clean implementation of the homepage, desktop version only, clean/dry code, and i will keep you read trough description some more time...boom! 10 seconds of your life wasted!'],
    techstack: ['React.js,', 'Typescript,', 'Scss'],
    demo: 'https://ioghistudio.github.io/upwork-homepage/',
    code: 'https://github.com/IoghiStudio/upwork-homepage',
    codeAvailable: true
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
            codeAvailable
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

                    {codeAvailable ? (
                      <Link
                        href={codeAvailable ? new URL(code) : ''}
                        target='_blank'
                        className={classNames("portfolio__link","portfolio__link--code")}
                      >
                        Code
                      </Link>
                    ) : (
                      <div
                        className={classNames("portfolio__link","portfolio__link--disabled")}
                      >
                        Code
                      </div>
                    )}

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
