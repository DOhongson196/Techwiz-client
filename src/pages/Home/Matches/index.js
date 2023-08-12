import classNames from 'classnames/bind';
import styles from './Matches.module.scss';
import MatchItem from '../../../components/MatchItem';

import { useState, useEffect, useRef } from 'react';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

function Matches() {
  const LIST_MATCHES = [
    {
      id: 1,
      status: 'done',
      positionTeam: 'left',
      dateCelebrate: 'Monday 31 July 2023,08:00, Allegian Stadium',
      rival: 'Atletico Madrid',
      logoRival: images.atleticoMadrid,
      score: '2 - 3',
      time: '08:00',
    },
    {
      id: 2,
      status: 'done',
      positionTeam: 'left',
      dateCelebrate: 'Monday 31 July 2023,18:45, Allegian Stadium',
      rival: 'Brugge',
      logoRival: images.brugge,
      score: '3 - 1',
      time: '18:45',
    },
    {
      id: 3,
      status: 'upcoming',
      positionTeam: 'left',
      dateCelebrate: 'Monday 31 July 2023,08:00, Allegian Stadium',
      rival: 'Brugge',
      logoRival: images.brugge,
      time: '08:00',
    },
    {
      id: 4,
      status: 'upcoming',
      positionTeam: 'right',
      dateCelebrate: 'Monday 31 July 2023,08:00, Allegian Stadium',
      rival: 'Barcelona',
      logoRival: images.barcelona,
      time: '08:00',
    },
    {
      id: 5,
      status: 'upcoming',
      positionTeam: 'left',
      dateCelebrate: 'Monday 31 July 2023,08:00, Allegian Stadium',
      rival: 'Atletico Madrid',
      logoRival: images.atleticoMadrid,
      time: '08:00',
    },
    {
      id: 6,
      status: 'upcoming',
      positionTeam: 'right',
      dateCelebrate: 'Monday 31 July 2023,08:00, Allegian Stadium',
      rival: 'LOSC Lille',
      logoRival: images.loscLille,
      time: '08:00',
    },
  ];

  const [indexMatch, setIndexMatch] = useState(1);
  const max = LIST_MATCHES.length;

  const sliderRef = useRef();
  const [start, setStart] = useState(0);
  const [width, setWidth] = useState(0);
  const [change, setChange] = useState(max);
  const [state, setState] = useState('');

  function dragStart(e) {
    setStart(e.clientX);
  }

  function dragEnd(e) {
    if (change > 0) {
      sliderRef.current.scollLeft += width;
    } else {
      sliderRef.current.scrollLeft -= width;
    }
  }

  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }

  function plusSlides(n) {
    n === -1 && setState('prev');
    n === 1 && setState('next');

    let numOfthumb = Math.round(sliderRef.current.offsetWidth / width);
    console.log(numOfthumb);

    setIndexMatch((prev) => prev + n);
    console.log(indexMatch);

    slideShow(indexMatch + n);
  }

  function slideShow(n) {
    if (n > max) {
      setIndexMatch(1);
    }
    if (n < 1) {
      setIndexMatch(max);
    }
  }
  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }
    const scrollWidth = sliderRef.current.scrollWidth;
    const childrenElementCount = sliderRef.current.childElementCount;
    console.log(childrenElementCount);
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
    // console.log(width);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || !width) return;
    //  let numOfthumb = Math.round(sliderRef.current.offsetWidth / width);

    // sliderRef.current.scrollLeft = indexCourse > numOfthumb ? (indexCourse - 1) * width : 0;

    if (state === 'prev') {
      console.log(state);
      sliderRef.current.scrollLeft -= width * 1;
    }
    if (state === 'next') {
      console.log(state);
      sliderRef.current.scrollLeft += width * 1;
    }
    // console.log(indexCourse);

    // sliderRef.current.scrollLeft = (indexCourse - 1) * width * 2;
  }, [width, indexMatch, state]);

  return (
    <div className="w-100% bg-[#f5f5f5] dark:bg-bgDarkMode p-20">
      <div className={cx('inner')}>
        <header>
          <h2 className="text-center mb-10 text-5xl font-semibold text-textColor dark:text-textDarkMode">Matches</h2>
        </header>
        <div className={cx('matches-carousel')}>
          <div className={cx('actions')}>
            <div className={cx('pre-btn')} onClick={() => plusSlides(-1)}>
              <img src={images.preIcon} alt="icon" />
            </div>
            <div className={cx('next-btn')} onClick={() => plusSlides(1)}>
              <img src={images.nextIcon} alt="icon" />
            </div>
          </div>
          <div className={cx('wrap-match')}>
            <div
              className={cx('list-match')}
              ref={sliderRef}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnd={dragEnd}
              onMouseMove={(e) => e.preventDefault()}
            >
              {LIST_MATCHES.map((data, index) => (
                <MatchItem key={index} data={data} index={indexMatch} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-textColor dark:text-textDarkMode text-xl w-fit px-7 content mx-auto mt-8 text-text bg-primary py-3 rounded-full cursor-pointer">
          View All
        </div>
      </div>
    </div>
  );
}

export default Matches;
