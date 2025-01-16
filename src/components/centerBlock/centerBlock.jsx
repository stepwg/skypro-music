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

  const [IsOpen1, setIsOpen1] = useState(false);
  const [IsOpen2, setIsOpen2] = useState(false);
  const [IsOpen3, setIsOpen3] = useState(false);
  const [IsLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true)
    }, 3000)
  })

  const AuthorHandleClick = () => {
    setIsOpen1(!IsOpen1);
  }

  const YearHandleClick = () => {
    setIsOpen2(!IsOpen2);
  }

  const MusicHandleClick = () => {
    setIsOpen3(!IsOpen3);
  }

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
              <div className="filter__button button-author _btn-text" onClick={AuthorHandleClick}>
                исполнителю
                {IsOpen1 && (
                <div className="PopUpMenu">
                  <ul>
                    <li>111111111111111</li>
                    <li>22222</li>
                    <li>3333333333</li>
                  </ul>
                </div>
              )}
              </div>
              <div className="filter__button button-year _btn-text" onClick={YearHandleClick}>
                году выпуска
                {IsOpen2 && (
                <div className="PopUpMenu">
                  <ul>
                    <li>4444444444444444</li>
                    <li>555555555555555555</li>
                    <li>666666666</li>
                  </ul>
                </div>
              )}
              </div>
              <div className="filter__button button-genre _btn-text" onClick={MusicHandleClick}>жанру
              {IsOpen3 && (
                <div className="PopUpMenu">
                  <ul>
                    <li>777777777777777</li>
                    <li>8888888</li>
                    <li>9999999999</li>
                  </ul>
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
