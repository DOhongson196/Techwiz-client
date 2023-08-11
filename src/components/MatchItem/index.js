import classNames from 'classnames/bind';
import styles from './MatchItem.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function MatchItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('body')}>
        {data.status === 'done' ? (
          <span className={cx('state')}>FRIENDLY</span>
        ) : (
          <span className={cx('state')}>COMING SOON</span>
        )}
        <p className={cx('time')}>{data.dateCelebrate}</p>
        <div className={cx('team')}>
          {data.positionTeam === 'left' ? (
            <>
              <div>
                <img className={cx('logo')} src={images.villareal} alt="logo" />

                {data.status === 'done' && <span>{data.score}</span>}
                {data.status === 'upcoming' && <span>{data.time}</span>}
                <img className={cx('logo')} src={data.logoRival} alt="logo" />
              </div>
              <div>
                <span>Vilareal</span>
                <span>VS</span>
                <span>{data.rival}</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <img className={cx('logo')} src={data.logoRival} alt="logo" />
                {data.status === 'done' && <span>{data.score}</span>}
                {data.status === 'upcoming' && <span>{data.time}</span>}
                <img className={cx('logo')} src={images.villareal} alt="logo" />
              </div>
              <div>
                <span>{data.rival}</span>
                <span>VS</span>
                <span>Villarreal</span>
              </div>
            </>
          )}

          <button>Match Review</button>
        </div>
      </div>
    </div>
  );
}

export default MatchItem;
