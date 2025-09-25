import { type FC } from 'react';
import { HorizonLogo } from '@/shared/ui/Icons/Icons';
import { Container } from '@/shared/ui/Container/Container';

export const SidebarLogo: FC = () => {
  return (
    <Container
      htmlTag="div"
      className="flex h-max w-full items-center justify-center border-b-2 border-solid border-[var(--color-light-white)]"
    >
      <HorizonLogo width="181" height="26" fill="var(--color-primary)" className="mt-14 mb-12" />
    </Container>
  );
};
