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

  //form details
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

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
      <div className="contact__content">
        <h1 className='contact__title'>
          <TagWrapper tagType={TagType.H1}>
            {wordsLines.map((wordsLine) => {
              const { id, words } = wordsLine;

              return (
                <div key={id} className='contact__title-words'>
                  {words.map(word => (
                    <div key={word.id} className="contact__title-word">
                      {word.chars.map(ch => (
                        <span key={ch.id} className={classNames('contact__title-ch' , {
                          'contact__title-ch--active': timer === +ch.id,
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
          <p className="contact__text">
            {/* <span className="contact__text-section">
              I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
            </span> */}

            <span className="contact__text-section">
              I’m interested in freelance opportunities – especially ambitious or large projects, feel free to reach out using this form. I'm here to help and will get back to you promptly.
            </span>
          </p>
        </TagWrapper>

        <div className="contact__form-wrapper">
          <TagWrapper tagType={TagType.Form}>
            <form
              action="/"
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();

                //send data
              }}
            >
              <div className="contact__inputs">
                <input
                  className="contact__input contact__input--name"
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <input
                  className="contact__input contact__input--email"
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <input
                className="contact__input contact__input--subject"
                type='text'
                name='subject'
                placeholder='subject'
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />

              <textarea
                maxLength={3000}
                className="contact__input contact__input--message"
                name='message'
                placeholder='message'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

              <button className='contact__submit' type="submit">
                Submit
              </button>
            </form>
          </TagWrapper>
        </div>
      </div>
    </div>
  )
}
