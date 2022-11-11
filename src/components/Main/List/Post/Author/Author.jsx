import style from './Author.module.scss';
import { Text } from '../../../../../UI/Text';

export const Author = ({ author }) => {
  return (
    <>
      <Text
        As="a"
        size="12"
        tsize="16"
        color="orange"
        fontWeight="bold"
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
    </>
  );
};
