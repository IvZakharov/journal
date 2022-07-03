import React from 'react';
import styles from './LeftMenu.module.scss';
import { Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

import {
  WhatshotOutlined as FireIcon,
  AccessTime as TimeIcon,
  TrendingUp as TrendingUpIcon,
  FormatListBulleted as ListIcon,
} from '@mui/icons-material/';

import { useRouter } from 'next/router';

const menu = [
  { text: 'Лента', icon: <FireIcon className={'mr-10'} />, path: '/' },
  { text: 'Сообщения', icon: <TimeIcon className={'mr-10'} />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingUpIcon className={'mr-10'} />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon className={'mr-10'} />, path: '/follows' },
];

export const LeftMenu: React.FC = () => {
  console.log(menu);

  return (
    <>
      <aside className={styles.menu}>
        <ul className={styles.list}>
          {menu.map((obj) => (
            <li key={obj.path}>
              <Link href={obj.path}>
                <a>
                  <Button
                    style={{
                      borderRadius: 8,
                      width: '100%',
                      padding: '8px',
                      fontSize: '18px',
                      textTransform: 'capitalize',
                      color: '#000',
                      justifyContent: 'flex-start',
                    }}>
                    {obj.icon}
                    {obj.text}
                  </Button>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
