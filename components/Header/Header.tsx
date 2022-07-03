import React from 'react';
import {Paper, Button, IconButton, Avatar, Stack} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Create as CreateIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import styles from './Header.module.scss';
import Link from 'next/link';

export const Header: React.FC = () => {
  const buttonStyles = {
    borderRadius: 10,
    backgroundColor: '#fff',
    height: '100%',
    fontSize: '14px',
    textTransform: 'capitalize',
    color: '#3b3b3b',
  };

  return (
    <>
      <header>
        <Paper classes={{root: styles.root}} elevation={0}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <MenuIcon fontSize={'large'}/>
            </IconButton>
            <Link href={'/'} className={styles.logo}>
              <a>logo</a>
            </Link>
            <div className={styles.searchBlock}>
              <SearchIcon/>
              <input type={'search'} placeholder={'Search...'}/>
            </div>
            <Button
              variant={'contained'}
              style={{
                borderRadius: 8,
                padding: '8px 16px',
                backgroundColor: '#fff',
                height: 43,
                minWidth: 43,
                fontSize: '1rem',
                textTransform: 'none',
                color: '#000',
              }}>
              <Link href={'/write'}>
                <a><span className={'mr-10'}>Новая запись</span></a>
              </Link>

              <CreateIcon fontSize={'medium'}/>
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>
              <NotificationsIcon fontSize={'medium'}/>
            </IconButton>
            <IconButton>
              <MessageIcon fontSize={'medium'}/>
            </IconButton>
            <Link href="/profile/1">
              <a className="d-flex align-center">
                <Avatar
                  src={
                    'https://gravatar.com/avatar/639ddbef7d858eaeb010bde06bc48198?s=400&d=wavatar&r=r'
                  }></Avatar>
              </a>
            </Link>
          </Stack>
        </Paper>
      </header>
    </>
  );
};
