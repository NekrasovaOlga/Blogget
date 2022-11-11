import { useRef, useContext } from 'react';
import style from './FormComment.module.scss';
import { authContext } from '../../context/authContext';
import { Text } from '../../../UI/Text/Text';
import { commentContext } from '../../context/commentContext';

export const FormComment = () => {
  const inputRef = useRef(null);
  const { value, setValue } = useContext(commentContext);
  const { auth } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
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
