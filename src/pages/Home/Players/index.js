import classNames from 'classnames/bind';
import styles from './Player.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Player() {
  const LIST_PLAYER = [
    {
      id: 1,
      name: 'Herlison Caion',
      country: 'Brazil',
      dob: '05/10/1990',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/6a5d33d8-03a1-4c3e-9280-ec7be303fb13.png',
      position: 'Attacker',
      clotherNumber: 17,
    },
    {
      id: 2,
      name: 'Herlison',
      country: 'Brazil',
      dob: '05/10/1990',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/1dfc52a1-3849-4393-9a37-931ab748e8cb.png',
      position: 'Attacker',
      clotherNumber: 99,
    },
    {
      id: 3,
      name: 'Do Duy Manh',
      country: 'Vietnam',
      dob: '05/10/1996',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/7d22e9f6-1857-4151-bea6-9ca41221c7c6.png',
      position: 'Defender',
      clotherNumber: 2,
    },
    {
      id: 4,
      name: 'Hoang Viet Anh',
      country: 'Vietnam',
      dob: '05/10/1990',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/9d112f13-decb-4ddc-9a1b-99d613480836.png',
      position: 'Defender',
      clotherNumber: 20,
    },
  ];

  const [active, setActive] = useState('');

  return (
    <div className="flex flex-col w-[1280px] mt-12 mx-auto ">
      <div className={cx('wrapper')}>
        <div className={'text-textColor dark:text-textDarkMode'}>
          <header>
            <h2 className="text-3xl font-semibold text-center mb-10">Top Players</h2>
          </header>
          <div className={cx('list-player')}>
            {LIST_PLAYER.map((item, index) => (
              <div
                key={item.id}
                className={cx('player')}
                onClick={() => {
                  setActive(item.name);
                }}
              >
                <div className={cx('introduction')}>
                  <div className=" cursor-pointer py-3 px-6 flex items-center gap-5 bg-primary bg-opacity-60 rounded-lg">
                    <div className={cx('wrap-avatar')}>
                      <img className={cx('avatar')} src={item.image} alt={item.name} />
                    </div>
                    <span className={cx('number')}>{item.clotherNumber}</span>

                    <div className={cx('name')}>
                      <p>{item.name.toLocaleUpperCase()}</p>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </div>
                <div className={active === item.name ? cx('details-info', 'active') : cx('details-info')}>
                  <div className={cx('content')}>
                    <p>
                      <span>Date of Birth: </span>
                      <span>{item.dob}</span>
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
                      <span>{item.country}</span>
                    </p>
                  </div>
                  <figure>
                    <img src={item.image} alt={item.name} />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
