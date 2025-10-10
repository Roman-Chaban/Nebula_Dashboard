import { type FC } from 'react';

import { HeaderProps } from '@/widgets/Header/model/types';
import { HeaderInfo } from '@/widgets/Header/ui/HeaderInfo';
import { HeaderInput } from '@/widgets/Header/ui/HeaderInput';
import { Container, LanguageSwitcher } from '@/shared/ui/index';
import { HeaderInputRightSide } from './HeaderInputRightSide';

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="col-span-12 w-full">
      <Container className="flex w-full items-center justify-between">
        <HeaderInfo title={title} subtitle={subtitle} />
        <HeaderInput>
          <HeaderInputRightSide />
          <LanguageSwitcher />
        </HeaderInput>
      </Container>
    </header>
  );
};
