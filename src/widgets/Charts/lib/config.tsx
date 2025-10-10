import { MonthChartInformationItems } from '@/widgets/Charts/model/types';

import { DoneTrackIcon } from '@/shared/ui/Icons/Icons';

export const monthChartInformationItems: MonthChartInformationItems = [
  {
    id: 1,
    primaryTitle: '$37.5K',
    primarySubtitle: 'Total Spent',
    perecent: '+2.45%',
    trackItem: {
      title: 'On track',
      icon: <DoneTrackIcon />,
    },
  },
];
