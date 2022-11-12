import { useState } from 'react';
import style from './Title.module.scss';
import { useDispatch } from 'react-redux';

import { Text } from '../../../../../UI/Text';
import Modal from './../../../../Modal';
import { updateModal } from '../../../../../store/modal/modalAction';
import { getPostId } from '../../../../../api/postId';

export const Title = ({ title, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(updateModal(getPostId(id)));
  };

  return (
    <h2 className={style.title}>
      <Text
        As="a"
        size="26"
        tsize="32"
        fontWeight="bold"
        className={style.linkPost}
        href="#post"
        onClick={() => {
          setIsModalOpen(true);
          handleClick(id);
        }}
      >
        {title}
      </Text>
      {isModalOpen && <Modal id={id} setIsModalOpen={setIsModalOpen} />}
    </h2>
  );
};
