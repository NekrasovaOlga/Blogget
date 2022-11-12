import style from './Title.module.scss';
import { useDispatch } from 'react-redux';

import { Text } from '../../../../../UI/Text';
import { updateModal } from '../../../../../store/modal/modalAction';
import { Link, useParams } from 'react-router-dom';

export const Title = ({ title, id }) => {
  const { page } = useParams();

  return (
    <h2 className={style.title}>
      <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
        <Text size="26" tsize="32" fontWeight="bold">
          {title}
        </Text>
      </Link>
    </h2>
  );
};
