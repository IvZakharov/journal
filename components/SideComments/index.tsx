import React from 'react';
import styles from './SideComments.module.scss';
import Link from 'next/link';
import {Avatar} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {CommentItem} from "./CommentItem";
import clsx from "clsx";
import data from '../../data';

export const SideComments = () => {
  const comments = data.comments.popular;
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  console.log(comments)
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon/>
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};