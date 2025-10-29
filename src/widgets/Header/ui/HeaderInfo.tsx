import { type FC } from 'react';

import { HeaderInfoProps } from '@/widgets/Header/model/types';
import { Container, Heading, Text } from '@/shared/ui/index';

export const HeaderInfo: FC<HeaderInfoProps> = ({ title, subtitle }) => {
  return (
    <Container className="flex flex-col">
      <Text
        properties={{ size: 'md', color: 'text-secondary', weight: '500' }}
        className="leading-extra inline-block"
      >
        {subtitle}
      </Text>
      <Heading
        level={1}
        className="text-primary leading-medium text-[34px] font-bold tracking-[-0.02em]"
      >
        {title}
      </Heading>
    </Container>
  );
};
