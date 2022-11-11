import { useState } from 'react';
import style from './Title.module.scss';
import { Text } from '../../../../../UI/Text';
import Modal from './../../../../Modal';

export const Title = ({ title, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        }}
      >
        {title}
      </Text>
      {isModalOpen && <Modal id={id} setIsModalOpen={setIsModalOpen} />}
    </h2>
  );
};
