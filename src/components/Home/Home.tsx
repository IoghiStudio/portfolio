"use client";
import { Title } from '@/components/Title';
import './Home.scss';
import { Text } from '../Text';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__info">
        <div className="home__title">
          <Title >
            <div className="home__title-word">
              Hi,
            </div>

            <div className="home__title-word">
              I'm Nicu,
            </div>

            <div className="home__title-word">
              Web developer
            </div>
          </Title>
        </div>

        <Text>
          <div className="home__text">
            Front End / Full Stack developer
          </div>
        </Text>
      </div>

      <div className="home__image"/>
    </div>
  )
}