import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { CommonContainerProps } from '@/entities/ui/common-container/common-container';

export const CommonContainer: FC<CommonContainerProps> = ({ children, paddingClass, maxWidth }) => {
  return (
    <Container
      className={`flex min-h-[345px] w-full max-w-[796px] flex-col rounded-[20px] bg-[var(--color-white)] max-[1360px]:max-w-full ${paddingClass ?? ''} `}
      width={maxWidth ?? '100%'}
      height={'100%'}
    >
      {children}
    </Container>
  );
};
