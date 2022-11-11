import { useEffect, useRef } from 'react';
import style from './Modal.module.scss';
import Markdown from 'markdown-to-jsx';
import { ReactComponent as CloseIcon } from './img/close.svg';
import ReactDOM from 'react-dom';
import { useCommentsData } from './../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({ setIsModalOpen, id }) => {
  const [{ post, comments }] = useCommentsData(id);

  const { title, author, selftext: markdown, url } = post;

  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      setIsModalOpen();
    }
  };

  const handleKeydownClick = (e) => {
    e = e || window.event;
    if (e.keyCode === 27) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydownClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydownClick);
    };
  }, []);
  console.log(markdown);
  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {title ? (
          <>
            {' '}
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
              {markdown ? (
                <Markdown
                  options={{
                    overrides: {
                      a: {
                        props: {
                          target: '_blank',
                        },
                      },
                    },
                  }}
                >
                  {markdown}
                </Markdown>
              ) : (
                <img src={url} />
              )}
            </div>
            <p className={style.author}>{author}</p>
            <FormComment />
            <Comments comments={comments} />
            <button
              className={style.close}
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <CloseIcon />
            </button>
          </>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
