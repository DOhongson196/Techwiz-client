import classNames from 'classnames/bind';
import styles from './NewsDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAxios } from '../../hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function NewsDetails() {
  let params = useParams();
  const api = useAxios();

  const [newsInfo, setNewsInfo] = useState(null);

  const [suggest, setSuggest] = useState([]);
  const navigate = useNavigate();

  console.log(params.newsId);

  const fetDeytails = async () => {
    try {
      const response = await api.get(`http://localhost:8080/api/v1/news/id=${params.newsId}`);
      console.log(response.data);
      setNewsInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetNewsSuggest = async () => {
    try {
      const response = await api.get('http://localhost:8080/api/v1/news');
      // console.log(response.data);
      const slicedArray = response.data.slice(0, 4);
      console.log(slicedArray);
      setSuggest(slicedArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetDeytails();
  }, [params.newsId]);

  useEffect(() => {
    fetNewsSuggest();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {newsInfo !== null && (
          <>
            <div className={cx('news-detail')}>
              <figure>
                <img className={cx('thumb')} src={newsInfo.thumbnail} alt={newsInfo.title} />
              </figure>
              <h3 className={cx('title')}>{newsInfo.title}</h3>
              <p className={cx('time')}>{newsInfo.updateAt.slice(0, 9)}</p>
              <p className={cx('content')}>{newsInfo.content}</p>
            </div>
            <div className={cx('recomend')}>
              <div className={cx('recomend-title')}>Suggested News</div>
              <div className={cx('wrap-suggest')}>
                {suggest.length > 0 && (
                  <>
                    {suggest.map((item, index) => (
                      <div key={index} className={cx('item')} onClick={() => navigate(`/news/${item.id}`)}>
                        <figure>
                          <img src={item.thumbnail} alt={item.title} />
                        </figure>
                        <p>{item.title}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className={cx('recomend-title')} onClick={() => navigate('/news')}>
                Category
              </div>
              <div className={cx('cat')}>News</div>
              <div className={cx('cat')}>Features</div>
              <div className={cx('cat')}>Interviews</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsDetails;
