import { useRef } from 'react';
import style from './FormComment.module.scss';
import { Text } from '../../../UI/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReducer';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [auth] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  const handleValue = (e) => {
    dispatch(updateComment(e.target.value));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As="h3" size="14" tsize="18">
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        ref={inputRef}
        value={value}
        onChange={handleValue}
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
