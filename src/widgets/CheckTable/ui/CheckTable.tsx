import { type FC } from 'react';

import {
  CommonContainer,
  CommonHeader,
  Container,
  Heading,
  List,
  Text,
} from '@/shared/ui/index';
import { DotsIcon } from '@/shared/ui/Icons/Icons';
import {
  tableProcessesHeadings,
  tableProcessesList,
} from '@/widgets/CheckTable/lib/config';
import { columnWidths, textStyles } from '@/widgets/CheckTable/lib/styles';
// import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

export const CheckTable: FC = () => {
  return (
    <CommonContainer
      maxWidth="774px"
      paddingClass="pt-[19px] pr-[25px] pb-[28px] pl-[31px]"
    >
      <CommonHeader title="Check Table" icon={<DotsIcon />} />
      {/* TODO: This component is temporary commented */}
      {/* <Checkbox size="md" variant="primary" /> */}

      <Container
        htmlTag="div"
        className="flex items-center justify-between py-[23px]"
      >
        {tableProcessesHeadings.map((heading, index) => (
          <Heading
            key={heading.id}
            className={`text-light-icon ${columnWidths[index]}`}
          >
            {heading.heading}
          </Heading>
        ))}
      </Container>

      <List
        className="flex flex-col gap-[17px]"
        getItemKey={(process) => process.id}
        renderList={tableProcessesList}
        renderItem={(process) => (
          <Container
            htmlTag="div"
            className="flex items-center justify-between"
          >
            <Heading
              level={3}
              className={`text-primary font-bold ${columnWidths[0]} `}
            >
              {process.name}
            </Heading>

            <Text properties={textStyles} className={columnWidths[1]}>
              {process.progress}
            </Text>
            <Text properties={textStyles} className={columnWidths[2]}>
              {process.quantity}
            </Text>
            <Text properties={textStyles} className={columnWidths[3]}>
              {process.date}
            </Text>
          </Container>
        )}
      />
    </CommonContainer>
  );
};
