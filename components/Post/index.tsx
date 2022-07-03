import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Paper, Typography} from "@mui/material";

import styles from './Post.module.scss';

import {PostActions} from './PostActions';

interface PostProps {
  title: string;
  id: number;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({id, title, description, imageUrl}) => {
  return (
    <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">{description}</Typography>
      {imageUrl && (
        <Image
          src={imageUrl}
          height={650}
          width={1000}
          alt={title}
        />
      )}
      <PostActions/>
    </Paper>
  );
};
