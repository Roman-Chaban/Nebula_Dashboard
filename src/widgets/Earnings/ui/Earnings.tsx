import { type FC } from 'react';
import { Earing } from '@/widgets/Earnings/index';
import { Container, List } from '@/shared/ui';
import { earingItems } from '@/widgets/Earnings/model/config';

export const Earnings: FC = () => {
  return (
    <Container className="w-full">
      <List
        itemClassName="w-full max-w-[248px]"
        className="flex w-full flex-wrap items-center gap-5"
        getItemKey={(earing) => earing.id}
        renderList={earingItems}
        renderItem={(earing) => <Earing key={earing.id} earing={earing} />}
      />
    </Container>
  );
};
