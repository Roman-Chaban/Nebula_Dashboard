import { type FC } from 'react';
import { HeaderProps } from '@/widgets/Header/model/types';
import { HeaderInfo } from '@/widgets/Header/ui/HeaderInfo';
import { HeaderInput } from '@/widgets/Header/ui/HeaderInput';
import { Container } from '@/shared/ui/Container/Container';
import { HeaderInputRightSide } from './HeaderInputRightSide';

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex h-max w-full">
      <Container className="flex w-full items-center justify-between">
        <HeaderInfo title={title} subtitle={subtitle} />
        <HeaderInput>
          <HeaderInputRightSide />
        </HeaderInput>
      </Container>
    </header>
  );
};
