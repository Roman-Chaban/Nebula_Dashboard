import { type FC } from 'react';

import { Container } from '@/shared/ui';
import { ChartsBoxProps } from '@/widgets/Charts/model/types';

export const ChartsBox: FC<ChartsBoxProps> = ({ children, paddingClass }) => {
  return (
    <Container
      className={`flex min-h-[345px] w-full max-w-[796px] flex-col rounded-[20px] bg-[var(--color-white)] max-[1360px]:max-w-full ${paddingClass ?? ''} `}
      width={'100%'}
      height={'100%'}
    >
      {children}
    </Container>
  );
};
