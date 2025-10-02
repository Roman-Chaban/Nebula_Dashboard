import { EaringItems } from '@/widgets/Earnings/model/types';
import { EaringIcon, ProjectsIcon, SpendIcon, TasksIcon } from '@/shared/ui/Icons/Icons';

export const earingItems: EaringItems = [
  {
    id: 1,
    icon: <EaringIcon />,
    title: 'Earnings',
    subtitle: '$350.4',
  },
  {
    id: 2,
    icon: <SpendIcon />,
    title: 'Spend this month',
    subtitle: '$642.39',
  },
  {
    id: 3,
    title: 'Sales',
    subtitle: '$574.34',
    extraTitle: '+23% since last month',
  },
  {
    id: 4,
    title: 'Your balance',
    subtitle: '$1,000',
  },
  {
    id: 5,
    icon: <TasksIcon />,
    title: 'New Tasks',
    subtitle: '154',
  },
  {
    id: 6,
    icon: <ProjectsIcon />,
    title: 'Total Projects',
    subtitle: '2935',
  },
];
