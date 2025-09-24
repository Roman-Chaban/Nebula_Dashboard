import { type FC } from 'react';
import { HeaderProps } from '@/widgets/Header/model/types';

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <div>
        <span>{subtitle}</span>
        <h1>{title}</h1>
      </div>
    </header>
  );
};
