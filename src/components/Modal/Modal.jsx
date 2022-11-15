import { useEffect, useRef } from 'react';
import style from './Modal.module.scss';
import Markdown from 'markdown-to-jsx';
import { ReactComponent as CloseIcon } from './img/close.svg';
import ReactDOM from 'react-dom';
import Comments from './Comments';
import FormComment from './FormComment';
import { useDispatch, useSelector } from 'react-redux';
import { modalRequestAsync } from '../../store/modal/modalAction';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modalRequestAsync(id));
  }, [id]);

  const post = useSelector((state) => state.modal.post);
  const comments = useSelector((state) => state.modal.comments);
  const status = useSelector((state) => state.modal.status);
  const { title, author, selftext: markdown, url } = post;
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handleKeydownClick = (e) => {
    e = e || window.event;
    if (e.keyCode === 27) {
      navigate(`/category/${page}`);
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
  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <p>Загрузка</p>}
        {status === 'error' && <p>Ошибка</p>}

        {status === 'loaded' && (
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
                navigate(`/category/${page}`);
              }}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
