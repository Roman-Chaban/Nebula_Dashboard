import { type FC } from 'react';
import { headerInputRightSideItems } from '@/widgets/Header/model/config';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';

export const HeaderInputRightSide: FC = () => {
  return (
    <Container className="flex items-center gap-5">
      {headerInputRightSideItems.map((item) => (
        <Button key={item.id} className="flex items-center" fullWidth variant="ghost">
          {item.icon}
        </Button>
      ))}
    </Container>
  );
};
