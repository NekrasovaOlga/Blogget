import { useRef } from 'react';
import style from './FormComment.module.scss';
import { Text } from '../../../UI/Text/Text';

export const FormComment = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As="h3" size="14" tsize="18">
        Имя авторизованного пользователя
      </Text>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
