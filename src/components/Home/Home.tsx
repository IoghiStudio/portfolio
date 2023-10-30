"use client";
import { TagType, TagWrapper } from '../TagWrapper';
import { useState, useEffect, useCallback } from 'react';
import './Home.scss';
import classNames from 'classnames';
import { WordsLine } from '@/types/WordsLine';
import { SpinCube } from '../SpinCube';
import Link from 'next/link';

const wordsLines: WordsLine[] = [
  {
    id: '1',
    words: [
      {
        id: '1',
        chars: 'Hi,'.split('').map((char, i) => ({
          id: String(i + 1),
          char,
        }))
      }
    ]
  },
  {
    id: '2',
    words: [
      {
        id: '1',
        chars: 'I\'m'.split('').map((char, i) => ({
          id: String(i + 4),
          char,
        }))
      },
      {
        id: '2',
        chars: 'Nicu'.split('').map((char, i) => ({
          id: String(i + 7),
          char,
        }))
      },
    ]
  },
  {
    id: '3',
    words: [
      {
        id: '1',
        chars: 'Web'.split('').map((char, i) => ({
          id: String(i + 11),
          char,
        }))
      },
      {
        id: '2',
        chars: 'developer'.split('').map((char, i) => ({
          id: String(i + 14),
          char,
        }))
      },
    ]
  },
];

export const Home = () => {
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
    if (timer === 23 && intervalId !== null) {
      console.log('timer is 23!');
      clearInterval(intervalId);
      setTimer(0);
    }
  }, [timer, intervalId]);

  return (
    <div className="home">
      <div className="home__info">
        <h1 className="home__title">
          <TagWrapper tagType={TagType.H1} >
            {wordsLines.map((wordsLine) => {
              const { id, words } = wordsLine;

              return (
                <div key={id} className='home__title-words'>
                  {words.map(word => (
                    <div key={word.id} className="home__title-word">
                      {word.chars.map(ch => (
                        <span key={ch.id} className={classNames('home__title-ch' , {
                          'home__title-ch--active': timer === +ch.id,
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

        <TagWrapper tagType={TagType.P}>
          <p className="home__text">
            Front End / Full Stack developer
          </p>
        </TagWrapper>

        <Link
          href={'/contact/'}
          className="home__contact"
        >
          Contact me!
        </Link>
      </div>

      <div className="home__animation">
        <SpinCube />
      </div>
    </div>
  )
}
