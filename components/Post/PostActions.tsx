import React from 'react';
import styles from './Post.module.scss';
import {IconButton} from "@mui/material";

import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const PostActions: React.FC = () => {


  return (
    <>
      <div className={styles.actions}>
        <ul className={'d-flex align-center gap-5'}>
          <li>
            <IconButton>
              <ModeCommentOutlinedIcon/>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <RepeatIcon/>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <BookmarksOutlinedIcon/>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <ReplyOutlinedIcon/>
            </IconButton>
          </li>
        </ul>
        <ul className={'d-flex align-center gap-5'}>
          <li className={'rotated'}>
            <IconButton>
              <KeyboardArrowDownIcon/>
            </IconButton>
          </li>
          <li><span className={'green'}>11</span></li>
          <li>
            <IconButton>
              <KeyboardArrowDownIcon/>
            </IconButton>
          </li>
        </ul>
      </div>
    </>
  );
};
