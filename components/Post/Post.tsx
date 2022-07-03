import React from 'react';
import styles from './Post.module.scss';
import {Paper, Typography} from "@mui/material";
import Image from "next/image";
import {PostActions} from "./PostActions";

export const Post: React.FC = () => {


  return (
    <>
      <Paper elevation={0} className={'p-20 mb-20'} classes={{root: styles.root}}>
        <Typography variant={"h5"} className={styles.title}>19 августа, четверг</Typography>
        <Typography className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid aperiam aspernatur
          corporis deleniti ducimus expedita fugit illum quasi quidem, quisquam, quos velit? Consectetur impedit, iure
          natus pariatur sapiente soluta.г</Typography>
        <Image
          src={"/img/post.jpg"}
          height={450}
          width={1000}
          layout={"responsive"}
        ></Image>
        <PostActions/>
      </Paper>

    </>
  );
};
