import { type FC } from 'react';

import { Container, Heading, List, Text } from '@/shared/ui';
import { monthChartInformationItems } from '@/widgets/Charts/lib/config';
import { TriangleIcon } from '@/shared/ui/Icons/Icons';

export const MonthChartInformation: FC = () => {
  return (
    <Container htmlTag="div" className="">
      <List
        getItemKey={(item) => item.id}
        renderList={monthChartInformationItems}
        renderItem={(item) => {
          const {
            id,
            primaryTitle,
            primarySubtitle,
            perecent,
            trackItem: { title, icon },
            ...rest
          } = item;
          return (
            <Container htmlTag="div" key={id} {...rest} className="flex flex-col gap-[25px]">
              <Container htmlTag="div" className="flex flex-col gap-1">
                <Heading
                  level={4}
                  className="leading-medium text-[34px] font-bold text-[var(--color-primary)]"
                >
                  {primaryTitle}
                </Heading>
                <Text
                  className="flex items-center gap-5"
                  properties={{
                    size: 'sm',
                    color: 'text-[var(--color-light-icon)]',
                    weight: '500',
                  }}
                >
                  {primarySubtitle}
                  <Text
                    className="flex items-center gap-[5px]"
                    properties={{
                      size: 'sm',
                      color: 'text-[var(--color-light-green)]',
                      weight: '700',
                    }}
                  >
                    {<TriangleIcon />}
                    {perecent}
                  </Text>
                </Text>
              </Container>
              <Container
                htmlTag="div"
                className="flex w-full max-w-max flex-row-reverse items-center gap-1.5"
              >
                <Heading level={5} className="text-[var(--color-light-green)]">
                  {title}
                </Heading>
                {icon}
              </Container>
            </Container>
          );
        }}
      />
    </Container>
  );
};
