import { FC } from 'react';
import { HeaderInfoProps } from '@/widgets/Header/model/types';

export const HeaderInfo: FC<HeaderInfoProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <span className="leading-extra text-secondary inline-block text-[14px] font-medium">
        {subtitle}
      </span>
      <h1 className="text-primary leading-medium text-[34px] font-bold tracking-[-0.02em]">
        {title}
      </h1>
    </div>
  );
};
