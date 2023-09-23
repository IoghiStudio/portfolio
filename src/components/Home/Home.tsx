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
              <span className='home__title-letter'>H</span>
              <span className='home__title-letter'>i</span>
              <span className='home__title-letter'>,</span>
            </div>

            <div className="home__title-word">
              <span className='home__title-letter'>I</span>
              <span className='home__title-letter'>,</span>
              <span className='home__title-letter'>m</span>
              {' '}
              <span className='home__title-letter'>N</span>
              <span className='home__title-letter'>i</span>
              <span className='home__title-letter'>c</span>
              <span className='home__title-letter'>u</span>
              <span className='home__title-letter'>,</span>
            </div>

            <div className="home__title-word">
              <span className='home__title-letter'>W</span>
              <span className='home__title-letter'>e</span>
              <span className='home__title-letter'>b</span>
              {' '}
              <span className='home__title-letter'>d</span>
              <span className='home__title-letter'>e</span>
              <span className='home__title-letter'>v</span>
              <span className='home__title-letter'>e</span>
              <span className='home__title-letter'>l</span>
              <span className='home__title-letter'>o</span>
              <span className='home__title-letter'>p</span>
              <span className='home__title-letter'>e</span>
              <span className='home__title-letter'>r</span>
              
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