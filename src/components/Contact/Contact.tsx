'use client';
import './Contact.scss';
import { WordsLine } from '@/types/WordsLine';
import { TagType, TagWrapper } from '../TagWrapper';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

const wordsLines: WordsLine[] = [
  {
    id: '1',
    words: [
      {
        id: '1',
        chars: 'Contact'.split('').map((char, i) => ({
          id: String(i + 1),
          char,
        }))
      },
      {
        id: '2',
        chars: 'me'.split('').map((char, i) => ({
          id: String(i + 8),
          char,
        }))
      },
    ]
  },
];


export const Contact = () => {
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
    <div className="contact">
      <div className="about__content">
        <h1 className='about__title'>
          <TagWrapper tagType={TagType.H1}>
            {wordsLines.map((wordsLine) => {
              const { id, words } = wordsLine;

              return (
                <div key={id} className='about__title-words'>
                  {words.map(word => (
                    <div key={word.id} className="about__title-word">
                      {word.chars.map(ch => (
                        <span key={ch.id} className={classNames('about__title-ch' , {
                          'about__title-ch--active': timer === +ch.id,
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
          <p className="about__text">
            <span className="about__text-section">
              I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
            </span>
          </p>
        </TagWrapper>
      </div>
    </div>
  )
}
