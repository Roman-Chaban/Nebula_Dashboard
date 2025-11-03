import { type FC } from 'react';

import { CommonContainer } from '@/shared/ui/CommonContainer/CommonContainer';
import { CommonHeader } from '@/shared/ui/Common/CommonHeader/CommonHeader';
import { DotsIcon } from '@/shared/ui/Icons/Icons';
// import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

export const CheckTable: FC = () => {
  return (
    <CommonContainer maxWidth="774px" paddingClass="pt-[19px] pr-[25px] pb-[28px] pl-[31px]">
      <CommonHeader title="Check Table" icon={<DotsIcon />} />
      {/* TODO: Temporary commented this component */}
      {/* <Checkbox size="md" variant="primary" /> */}
    </CommonContainer>
  );
};
