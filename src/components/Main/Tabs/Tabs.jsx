import { useState, useEffect } from 'react';
import style from './Tabs.module.scss';

import { assignId } from '../../utils/generateRandom';
import { debounce } from '../../utils/debounce';
import { Text } from '../../../UI/Text';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { useNavigate } from 'react-router-dom';

const LIST = [
  {
    value: 'Главная',
    Icon: HomeIcon,
    link: 'rising',
  },
  {
    value: 'Топ',
    Icon: BestIcon,
    link: 'top',
  },
  {
    value: 'Лучшие',
    Icon: HotIcon,
    link: 'best',
  },
  {
    value: 'Горячие',
    Icon: TopIcon,
    link: 'hot',
  },
].map(assignId);

export const Tabs = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [titleName, setTitleName] = useState('Главная');
  const [isDropdown, setIsDropdown] = useState(false);

  const handleResize = () => {
    if (document.documentElement.clientWidth > 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debiunceResize = debounce(handleResize);
    debiunceResize();
    window.addEventListener('resize', debiunceResize);

    return () => {
      window.removeEventListener('resize', debiunceResize);
    };
  }, []);
  return (
    <div className={style.container}>
      {!isDropdown && (
        <div className={style.wrapperBtn}>
          <Text
            className={style.btn}
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            {titleName}
            <ArrowIcon width={15} height={15} />
          </Text>
        </div>
      )}

      {(isDropdownOpen || isDropdown) && (
        <ul className={style.list}>
          {LIST.map(({ value, id, link, Icon }) => (
            <li key={id} className={style.item}>
              <button
                className={style.btn}
                onClick={() => {
                  navigate(`/category/${link}`);
                  setTitleName(value);
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
