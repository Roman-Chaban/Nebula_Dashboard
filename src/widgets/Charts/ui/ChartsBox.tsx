import { type FC } from 'react';
import { Container } from '@/shared/ui';
import { ChartsBoxProps } from '@/widgets/Charts/model/types';

export const ChartsBox: FC<ChartsBoxProps> = ({ children, paddingClass }) => {
  return (
    <Container
      className={`min-h-[345px] max-w-[796px] rounded-[20px] bg-[var(--color-white)] ${paddingClass ?? ''} `}
      width={'100%'}
      height={'100%'}
    >
      {children}
    </Container>
  );
};
