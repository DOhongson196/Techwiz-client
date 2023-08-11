import { useState } from 'react';

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
    <div className="wrapper bg-fbfaff py-70">
      <div className="inner mx-auto">
        <header>
          <h2 className="text-center mb-35 text-primary-color text-1.6rem font-semibold">Top Players</h2>
        </header>
        <div className="list-player grid grid-cols-2 gap-x-20 gap-y-20">
          {LIST_PLAYER.map((item, index) => (
            <div
              key={item.id}
              className={`player overflow-hidden ${active === item.name ? 'details-info active' : 'details-info'}`}
              onClick={() => {
                setActive(item.name);
              }}
            >
              <div className="introduction cursor-pointer py-12 px-22 flex items-center gap-20 bg-rgba-50-90-255-06 rounded-10">
                <div className="wrap-avatar w-68 h-68 relative overflow-hidden rounded-full border-1 border-white">
                  <img className="absolute bottom-60% left-0 w-full object-cover" src={item.image} alt={item.name} />
                </div>
                <span className="number text-8rem font-bold text-primary-color">{item.clotherNumber}</span>
                <div className="name ml-50">
                  <p className="text-3rem font-semibold text-010101">{item.name.toLocaleUpperCase()}</p>
                  <span className="text-20px font-medium text-1b3152">{item.position}</span>
                </div>
              </div>
              <div className="content p-12 lg:p-40">
                <p className="text-1.6rem text-717171">
                  <span className="font-semibold">Date of Birth: </span>
                  {item.dob}
                </p>
                <p className="text-1.6rem text-717171">
                  <span className="font-semibold">Height: </span>
                  {item.height}
                </p>
                <p className="text-1.6rem text-717171">
                  <span className="font-semibold">Weight: </span>
                  {item.weight}
                </p>
                <p className="text-1.6rem text-717171">
                  <span className="font-semibold">Country: </span>
                  {item.country}
                </p>
              </div>
              <figure className="w-50 relative">
                <img className="absolute w-full object-cover" src={item.image} alt={item.name} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Player;
