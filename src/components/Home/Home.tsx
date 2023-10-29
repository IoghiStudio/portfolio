"use client";
import { TagType, TagWrapper } from '../TagWrapper/TagWrapper';
import { useState, useEffect, useCallback } from 'react';
import './Home.scss';
import classNames from 'classnames';

interface Char {
  id: string;
  char: string;
}
interface Word {
  id: string;
  chars: Char[];
};

interface WordsLine {
  id: string;
  words: Word[];
};

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

  let interval: NodeJS.Timeout | null = null;

  const handleTimer = useCallback(() => {
    interval = setInterval(() => {
      setTimer(state => state + 1);
    }, 200);
  }, []);

  useEffect(() => {
    console.log('ONLY TRUE DEVELOPERS CHECK THE CONSOLE!');
    handleTimer();
  }, []);

  useEffect(() => {
    if (timer === 26 && interval) clearInterval(interval);
  }, [timer]);

  return (
    <div className="home">
      <div className="home__info">
        <div className="home__title">
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
        </div>

        <TagWrapper tagType={TagType.P}>
          <div className="home__text">
            Front End / Full Stack developer
          </div>
        </TagWrapper>
      </div>

      <div className="home__image"/>
    </div>
  )
}