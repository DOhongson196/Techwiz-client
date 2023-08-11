import classNames from 'classnames/bind';
import styles from './AllPlayers.module.scss';
import { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutSide';

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
    {
      id: 5,
      name: 'Bui Tuan Truong',
      country: 'Vietnam',
      dob: '05/10/1990',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/3ae12f6b-4ae5-4472-8f9a-370d42705e6d.png',
      position: 'Gloalie',
      clotherNumber: 1,
    },
    {
      id: 6,
      name: 'Quan Van Chuan',
      country: 'Vietnam',
      dob: '05/10/1990',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/d28f8afb-1173-4707-8aae-14455fc84615.png',
      position: 'Gloalie',
      clotherNumber: 37,
    },

    {
      id: 7,
      name: 'Tran Van Dat',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/45b722ad-f7eb-4ede-bab2-a867875ff38f.png',
      position: 'Midfieder',
      clotherNumber: 65,
    },
    {
      id: 8,
      name: 'Mach Ngoc Ha',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/e310cb37-12dc-4ce0-bb57-7792e54b3559.png',
      position: 'Midfieder',
      clotherNumber: 22,
    },
    {
      id: 9,
      name: 'Le Xuan Tu',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/5bf5de6f-fb72-4708-983f-0e13b353dcf6.png',
      position: 'Midfieder',
      clotherNumber: 25,
    },
    {
      id: 10,
      name: 'Mguyen Van Quyet',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/d1876322-e6f6-415b-9f22-eb5f4ba36c6b.png',
      position: 'Midfieder',
      clotherNumber: 10,
    },
    {
      id: 11,
      name: 'Dau Van Toan',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/9ebd8b32-7989-4d3d-9370-b5e66c135d4d.png',
      position: 'Midfieder',
      clotherNumber: 22,
    },
    {
      id: 12,
      name: 'Le Xuan Tu',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/7838c89b-f7e5-446a-b31b-0d1ee1716eeb.png',
      position: 'Midfieder',
      clotherNumber: 8,
    },
    {
      id: 13,
      name: 'Do Hung Dung',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/db9fea09-6686-43a2-9429-d9697349914b.png',
      position: 'Midfieder',
      clotherNumber: 88,
    },
    {
      id: 14,
      name: 'Nguyen Van Cong',
      country: 'Vietnam',
      dob: '05/10/2000',
      height: 184,
      weight: 82,
      image: 'https://cms.hanoifc.net/images/4212a77c-5336-4767-9bad-6f12dbf6ef21.png',
      position: 'Gloalie',
      clotherNumber: 18,
    },
  ];

  const TYPE_TRAINER = 'trainer';
  const TYPE_PLAYER = 'player';

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
              {LIST_PLAYER.map((item, index) => (
                <div key={item.id} className={cx('player')}>
                  <div
                    ref={itemRef}
                    className={cx('introduction')}
                    onClick={() => {
                      setActive(item.name);
                    }}
                  >
                    <div className={cx('wrap-avatar')}>
                      <img className={cx('avatar')} src={item.image} alt={item.name} />
                    </div>
                    <span className={cx('number')}>{item.clotherNumber}</span>

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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPlayers;
