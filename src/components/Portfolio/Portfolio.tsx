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
  description: string;
  techstack: string[]
  demo: string;
  code: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Job Platform',
    img: 'videoworkers',
    description: 'Upwork Homepage clean implementation, desktop version only',
    techstack: ['Next.js', 'Typescript', 'Scss', 'Rest Api', 'Axios', 'Express.js', 'PostgreSql'],
    demo: 'https://ioghistudio.github.io/upwork-homepage/',
    code: 'https://github.com/IoghiStudio/upwork-homepage'
  },
  {
    id: '2',
    title: 'Upwork Homepage',
    img: 'upwork',
    description: 'Upwork Homepage clean implementation, desktop version only',
    techstack: ['React.js', 'Typescript', 'Scss'],
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
            description,
            techstack,
            demo,
            code,
          } = project;

          return (
            <div key={id} className={classNames("portfolio__project", {
              "portfolio__project--reversed": +id % 2 === 0
            })}>
              <div className={classNames(
                "portfolio__image",
                `portfolio__image--${img}`
              )}/>

              <div className="portfolio__name">
                {title}
              </div>

              <div className="portfolio__description">
                {description}
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
          )
        })}
      </div>
    </div>
  )
}
