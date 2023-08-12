import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutSide';

const cx = classNames.bind(styles);

function Video() {
  const LIST_VIDEO = [
    {
      id: 1,
      thumb: images.thumbVideo1,
      videoId: 'Hj8cKz_9irc',
    },
    {
      id: 2,
      thumb: images.thumbVideo2,
      videoId: 'Hj8cKz_9irc',
    },
  ];
  const refModal = useRef();
  const [modal, setModal] = useState(false);
  const [videId, setVideoId] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  useOnClickOutside(modal, toggleModal);

  const handleShowVide = (id) => {
    setVideoId(id);
    setModal(true);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {LIST_VIDEO.map((item) => (
          <div className={cx('item')} onClick={() => handleShowVide(item.videoId)}>
            <figure>
              <img className={cx('thumb')} src={item.thumb} alt="video" />
              <span className={cx('btn-play')}>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </figure>
          </div>
        ))}

        {modal && videId !== '' && (
          <div className={cx('modal')}>
            <div className={cx('overlay')} onClick={toggleModal}></div>
            <div className={cx('modal-content')}>
              <div className={cx('video')}>
                <iframe
                  width="960"
                  height="515"
                  src={`https://www.youtube.com/embed/${videId}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Video;
