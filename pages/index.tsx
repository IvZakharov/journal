import type {NextPage} from 'next';
import Head from 'next/head';

import React from 'react';
import {MainLayout} from "../layouts/MainLayout";
import {Post} from "../components/Post";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IJurnal</title>
        {/*<link rel="icon" href="/facivon.ico"/>*/}
      </Head>
      <MainLayout>

        <Post title={'Hfpds'} id={0} description={'desctiorion'}
              imageUrl={'/img/post.jpg'}/>
      </MainLayout>
    </>
  );
};

export default Home;
