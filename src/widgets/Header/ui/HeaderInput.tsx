import { ReactNode, type FC } from 'react';
import { Input } from '@/shared/ui/Input/Input';
import { SearchIcon } from '@/shared/ui/Icons/Icons';
import { Container } from '@/shared/ui/Container/Container';

export const HeaderInput: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container className="flex w-full max-w-[500px] items-center gap-5 rounded-[30px] bg-white p-[10px]">
      <Input size="md" placeholder="Search" leading={<SearchIcon />} />
      {children}
    </Container>
  );
};
