import { Header } from '../components/Header/Header';

import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  children?: ReactNode;
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hideComments,
  contentFullWidth,
  hideMenu,
}) => {
  return (
    <>
      <Header />

      <div className={clsx('wrapper')}>
        {!hideMenu && (
          <div className="leftSide">
            <LeftMenu />
          </div>
        )}

        <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
        {!hideComments && (
          <div className="rightSide">
            <SideComments />
          </div>
        )}
      </div>
    </>
  );
};
