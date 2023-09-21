"use client";
import { TagType, TagWrapper } from '../TagWrapper/TagWrapper';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__info">
        <div className="home__title">
          <TagWrapper tagType={TagType.H1} >
            <div className="home__title-word">
              Hi,
            </div>

            <div className="home__title-word">
              I'm Nicu,
            </div>

            <div className="home__title-word">
              Web developer
            </div>
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