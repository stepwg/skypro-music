import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './centerBlock.css';
import { TrackItem } from '../track/tracks';
import { tracksList } from '../track/track';
import { useEffect, useState } from 'react';

function Box({ children }) {
  return (
    <div
      style={{
        display: 'block',
        lineHeight: 2,
        padding: '1rem',
        marginBottom: '0.5rem',
        width: 1000,
      }}
    >
      {children}
    </div>
  );
}

function CenterBlock() {

  const filterStates = {

    CLOSED: "closed",
    AUTHOR: "author",
    GENRE: "genre",
    YEAR: "year"
    }

  const [filter, setFilter] = useState(filterStates.CLOSED);
  const [IsLoad, setIsLoad] = useState(false);

  

    const toggleFilterState = (filterName) => {
      setFilter(filter === filterName ? filterStates.CLOSED : filterName);
    };

  const isAuthor = filter === filterStates.AUTHOR;
  const isGenter = filter === filterStates.GENRE;
  const isYear = filter === filterStates.YEAR;

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true)
    }, 3000)
  })


  return (
    <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text" onClick={() => toggleFilterState(filterStates.AUTHOR)}>
          исполнителю
          {isAuthor && (
            <div className="PopUpMenu">
                <a href="#item1">Nero</a>
                <a href="#item1">Dynoro, Outwork, Mr. Gee</a>
                <a href="#item1">Ali Bakgor</a>
                <a href="#item1">'Стоункат, Psychopath</a>
                <a href="#item1">Jaded, Will Clarke, AR/CO</a>
                <a href="#item1">Blue Foundation, Zeds Dead</a>
                <a href="#item1">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                <a href="#item1">minthaze</a>
                <a href="#item1">3333333333</a>
            </div>
          )}
        </div>
              <div className="filter__button button-year _btn-text" onClick={() => toggleFilterState(filterStates.YEAR)}>
                году выпуска
                {isYear && (
                <div className="PopUpMenu">
                    <a href="#item1">1995</a>
                    <a href="#item1">2000</a>
                    <a href="#item1">2010</a>
                    <a href="#item1">2020</a>
                </div>
              )}
              </div>
              <div className="filter__button button-genre _btn-text" onClick={() => toggleFilterState(filterStates.GENRE)}>жанру
              {isGenter && (
                <div className="PopUpMenu">
                    <a href="#item1">Рок</a>
                    <a href="#item1">Поп</a>
                    <a href="#item1">Реп</a>
                </div>
              )}
              </div>
            </div>

            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div classNames="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              {IsLoad === true ? 
              <div className="content__playlist playlist">
              {tracksList.map(item => (
                <TrackItem image={item.trackIMG} name={item.trackName} author={item.trackAuthor} album={item.trackAlbom} time={item.trackTime} />
              ))}
            </div>
            :
            <Skeleton wrapper={Box} count={6} />
            }
            </div>
          </div>
  );
}

export default CenterBlock;
