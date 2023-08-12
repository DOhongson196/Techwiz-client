import classNames from 'classnames/bind';
import styles from './AllNews.module.scss';
import { useAxios } from '../../hooks';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_NEWS } from '../../services/Constant';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AllNews() {
  const api = useAxios();
  const [news, setNews] = useState([]);

  const [type, setType] = useState('latest');
  const navigate = useNavigate();

  useEffect(() => {
    const fectchApi = async () => {
      try {
        let response;
        if (type === 'latest') {
          response = await api.get(API_NEWS);
        } else {
          response = await api.get(API_NEWS + `/type=${type}`);
        }

        console.log(response.data);
        setNews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectchApi();
  }, [type]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <header>
          <span className={type === 'latest' ? cx('active') : cx('')} onClick={() => setType('latest')}>
            Latest
          </span>
          <span className={type === 'news' ? cx('active') : cx('')} onClick={() => setType('news')}>
            News
          </span>
          <span className={type === 'features' ? cx('active') : cx('')} onClick={() => setType('features')}>
            Features
          </span>
        </header>
        {news.length > 0 && (
          <>
            <div className={cx('container')}>
              {news
                .sort((a, b) => (a.minusAgo > b.minusAgo ? 1 : -1))
                .map((item) => (
                  <div key={item.id} className={cx('item')} onClick={() => navigate(`/news/${item.id}`)}>
                    <figure className={cx('wrap-thumnail')}>
                      <img className={cx('thumbnail')} src={item.thumbnail} alt={item.title} />
                    </figure>
                    <div className={cx('content')}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <span className={cx('group')}>
                        {item.minusAgo < 24 * 60 ? (
                          <>
                            {item.minusAgo < 60 ? (
                              <span className={cx('time')}>{item.minusAgo} minus</span>
                            ) : (
                              <span className={cx('time')}>{Math.round(item.minusAgo / 60)} hour</span>
                            )}
                          </>
                        ) : (
                          <span className={cx('time')}>{item.updateAt.slice(0, 9)}</span>
                        )}
                        <span className={cx('seperate')}></span>
                        <span className={cx('type')}>{item.typeNews.name}</span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AllNews;
