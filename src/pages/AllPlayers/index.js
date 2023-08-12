import classNames from 'classnames/bind';
import styles from './AllPlayers.module.scss';
import { useState, useRef, useEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutSide';
import { API_PLAYER, getPlayerImageUrl } from '../../services/Constant';
import axios from 'axios';

const cx = classNames.bind(styles);

function AllPlayers() {
  const LIST_TRAINER = [
    {
      id: 1,
      name: 'BOZIDAR BANDOVIC',
      country: 'Montenegro',
      dob: '29/08/1969',
      image: 'https://cms.hanoifc.net/images/118fa4a8-451f-4481-9c89-49264b37fb49.png',
      position: 'Head Coach',
    },
    {
      id: 2,
      name: 'HOANG VAN PHUC',
      dob: '19/12/1964',
      image: 'https://cms.hanoifc.net/images/b65ff440-a8b7-4c50-a93b-b8760f623402.png',
      position: 'Technical director',
      country: 'Vietnam',
    },
    {
      id: 3,
      name: 'NGUYEN TIEN DUNG',
      dob: '01/07/1981',
      image: 'https://cms.hanoifc.net/images/234ddb24-bec6-46a5-a01a-d3919169727e.png',
      position: 'Assistant Coach',
      country: 'Vietnam',
    },
    {
      id: 4,
      name: 'LE DUC TUAN',
      dob: '13/07/1982',
      image: 'https://cms.hanoifc.net/images/53274098-fc5c-433a-ad42-1aaea2123eec.png',
      position: 'Assistant Coach',
      country: 'Vietnam',
    },
    {
      id: 5,
      name: 'SRDAN STOJČEVSKI',
      dob: '15/08/1985',
      image: 'https://cms.hanoifc.net/images/7ee86f4c-aa41-4b2e-a0ec-90e0d972e716.png',
      position: 'Assistant Coach',
      country: 'Sẻbia',
    },
    {
      id: 6,
      name: 'NGUYEN THE ANH',
      dob: '15/08/1985',
      image: 'https://cms.hanoifc.net/images/3900c9b4-75be-4375-8800-1b00a61ee4e6.png',
      position: 'Goalkeeper Coach',
      country: 'Vietnam',
    },

    {
      id: 7,
      name: 'VAN BA AN',
      dob: '04/12/1991',
      image: 'https://cms.hanoifc.net/images/9193f07a-71bd-4ec5-8879-b8a938280fc6.png',
      position: 'Language Assistant',
      country: 'Vietnam',
    },
    {
      id: 8,
      name: 'NGUYEN DUC THIEN',
      dob: '03/06/1983',
      image: 'https://cms.hanoifc.net/images/1f74731a-3192-47da-8fe0-2fcc20f574ae.png',
      position: 'Doctor',
      country: 'Vietnam',
    },
  ];

  const TYPE_TRAINER = 'trainer';
  const TYPE_PLAYER = 'player';

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get(API_PLAYER)
      .then((res) => {
        setPlayer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [typeRender, setTypeRender] = useState(TYPE_PLAYER);

  const [active, setActive] = useState('');
  const itemRef = useRef();
  const toggleItem = () => {
    setActive('');
  };

  useOnClickOutside(itemRef, toggleItem);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <header>
          <div
            className={typeRender === TYPE_TRAINER ? cx('active') : cx('')}
            onClick={() => setTypeRender(TYPE_TRAINER)}
          >
            Trainer
          </div>
          <div
            className={typeRender === TYPE_PLAYER ? cx('active') : cx('')}
            onClick={() => setTypeRender(TYPE_PLAYER)}
          >
            Player
          </div>
        </header>
        <div className={cx('list-container')}>
          {typeRender === TYPE_TRAINER ? (
            <>
              {LIST_TRAINER.map((item, index) => (
                <div key={item.id} className={cx('trainer')}>
                  <div
                    className={cx('introduction')}
                    onClick={() => {
                      setActive(item.name);
                    }}
                    ref={itemRef}
                  >
                    <div className={cx('wrap-avatar')}>
                      <img className={cx('avatar')} src={item.image} alt={item.name} />
                    </div>

                    <div className={cx('name')}>
                      <p>{item.name.toLocaleUpperCase()}</p>
                      <span>{item.position}</span>
                    </div>
                  </div>
                  <div className={active === item.name ? cx('details-info', 'active') : cx('details-info')}>
                    <div className={cx('content')}>
                      <p>
                        <span>Date of Birth: </span>
                        <span>{item.dob}</span>
                      </p>

                      <p>
                        <span>Country: </span>
                        <span>{item.country}</span>
                      </p>
                    </div>
                    <figure>
                      <img src={item.image} alt={item.name} />
                    </figure>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {player.map((item, index) => (
                <div key={item.id} className={cx('player')}>
                  <div
                    ref={itemRef}
                    className={cx('introduction')}
                    onClick={() => {
                      setActive(item?.name);
                    }}
                  >
                    <div className={cx('wrap-avatar')}>
                      <img className={cx('avatar')} src={getPlayerImageUrl(item?.image)} alt={item.name} />
                    </div>
                    <span className={cx('number')}>{item.number}</span>

                    <div className={cx('name')}>
                      <p>{item.name.toLocaleUpperCase()}</p>
                      <span>{item.position}</span>
                    </div>
                  </div>
                  <div className={active === item.name ? cx('details-info', 'active') : cx('details-info')}>
                    <div className={cx('content')}>
                      <p>
                        <span>Date of Birth: </span>
                        <span>{item.dateOfBirth}</span>
                      </p>
                      <p>
                        <span>Height: </span>
                        <span>{item.height}</span>
                      </p>
                      <p>
                        <span>Weight: </span>
                        <span>{item.weight}</span>
                      </p>
                      <p>
                        <span>Country: </span>
                        <span>{item.national}</span>
                      </p>
                    </div>
                    <figure>
                      <img src={getPlayerImageUrl(item?.image)} alt={item.name} />
                    </figure>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPlayers;
