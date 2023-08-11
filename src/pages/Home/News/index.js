import classNames from 'classnames/bind';
import styles from './NewLastest.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

function NewLastest() {
  const LIST_NEWS = [
    {
      id: 1,
      title: 'Straight up fire',
      desc: 'It is safe to say United supporters are thrilled with are appearance of roy Kean in our new third kit aunch.',
      type: 'news',
      thumnail: images.news5,
      time: '1d',
    },

    {
      id: 2,
      title: 'Hojund works on pitches at Carrington',
      desc: 'New singing is currently managig his recovery from a small issue picked up with hos formed club.',
      type: 'news',
      thumnail: images.news2,
      time: '7h',
    },
    {
      id: 3,
      title: 'Our defeensive rock',
      desc: '',
      type: 'features',
      time: '14h',
      thumnail: images.news6,
    },
    {
      id: 4,
      title: 'Rasmus Hojlund - The signing interview',
      desc: '',
      type: 'interview',
      thumnail: images.news3,
      time: '14h',
    },

    {
      id: 5,
      title: 'What fans are saying about',
      desc: 'The release of our adidas third kit for the 2023/24 season is currently a trending topic on social media',
      type: 'news',
      thumnail: images.news4,
      time: '8h',
    },

    {
      id: 6,
      title: "Wednesday's update from Carrington",
      desc: 'The squad is building towards the start of the Premier League campain, with one Red back in full training after injury.',
      type: 'news',
      thumnail: images.news1,
      time: '2h',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <header>
          <div>
            <span>Our Latest News</span>
            <h2 className="text-[#1e2329] dark:text-textDarkMode ">Today on Soccer Club</h2>
          </div>
          <span className={cx('link')}>All News</span>
        </header>
        <div className={cx('list-news')}>
          <div className={cx('item')}>
            {LIST_NEWS.filter((i) => i.id < 3).map((item, index) => (
              <div key={index} className={cx('inner-item')}>
                <img className={cx('thumb')} src={item.thumnail} alt={item.title} />
                <h4 className="text-[#1e2329] dark:text-textDarkMode ">{item.title}</h4>
                <p>{item.desc}</p>

                <div className={cx('group')}>
                  <span>
                    <span>{item.time}</span>
                    <span>{item.type}</span>
                  </span>

                  <img className={cx('icon-share')} src={images.shareIcon} alt="icon" />
                </div>
              </div>
            ))}
          </div>
          <div className={cx('item')}>
            {LIST_NEWS.filter((item) => item.id === 3).map((i) => (
              <figure key={i.id}>
                <img className={cx('thumb')} src={i.thumnail} alt={i.title} />
                <div className={cx('group')}>
                  <span>
                    <span>{i.time}</span>
                    <span>{i.type}</span>
                  </span>

                  <img className={cx('icon-share')} src={images.shareIcon} alt="icon" />
                </div>
              </figure>
            ))}
          </div>
          <div className={cx('item')}>
            {LIST_NEWS.filter((item) => item.id === 4).map((i) => (
              <figure key={i.id}>
                <img className={cx('thumb')} src={i.thumnail} alt={i.title} />
                <div className={cx('group')}>
                  <span>
                    <span>{i.time}</span>
                    <span>{i.type}</span>
                  </span>

                  <img className={cx('icon-share')} src={images.shareIcon} alt="icon" />
                </div>
              </figure>
            ))}

            <div className={cx('row')}>
              {LIST_NEWS.filter((item) => item.id > 4).map((item, index) => (
                <div key={index} className={cx('inner-item')}>
                  <div>
                    <img className={cx('thumb')} src={item.thumnail} alt={item.title} />

                    <h4 className="text-[#1e2329] dark:text-textDarkMode ">{item.title}</h4>
                    <p>{item.desc}</p>

                    <div className={cx('group')}>
                      <span>
                        <span>{item.time}</span>
                        <span>{item.type}</span>
                      </span>

                      <img className={cx('icon-share')} src={images.shareIcon} alt="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLastest;
