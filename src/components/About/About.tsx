'use client';
import { WordsLine } from '@/types/WordsLine';
import { TagType, TagWrapper } from '../TagWrapper';
import './About.scss';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';


const wordsLines: WordsLine[] = [
  {
    id: '1',
    words: [
      {
        id: '1',
        chars: 'About'.split('').map((char, i) => ({
          id: String(i + 1),
          char,
        }))
      },
      {
        id: '2',
        chars: 'me'.split('').map((char, i) => ({
          id: String(i + 6),
          char,
        }))
      },
    ]
  },
];

export const About = () => {
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
    if (timer === 8 && intervalId !== null) {
      console.log('timer is 8!');
      clearInterval(intervalId);
      setTimer(0);
    }
  }, [timer, intervalId]);

  return (
    <div className="about">
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
              Experienced Software Engineer with 6 years of robust programming experience, focusing on Frontend Development for the past 4 years. Showcases 2 years of proven success in commercial Frontend Development, delivering impactful solutions.
            </span>

            <span className="about__text-section">
              Acknowledged for my clear communication, exceptional organizational skills, and meticulous attention to detail.
            </span>

            <span className="about__text-section">
              Combining expertise in Game Development and 3D Art, I offer a unique fusion of technical proficiency and creative design, driving the development of exceptional web applications.
            </span>

            <span className="about__text-section">
              Excited to leverage my expertise to contribute to the creation of impactful projects within your team.
            </span>

            <span className="about__text-section">
              As a technology fanatic, I am committed to continuous self-improvement and aspire to become a great Software Engineer.
            </span>
          </p>
        </TagWrapper>
      </div>

      <div className="about__picture"/>
    </div>
  )
}
