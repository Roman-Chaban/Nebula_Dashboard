import { EaringItems } from '@/widgets/Earnings/model/types';
import { EaringIcon, ProjectsIcon, SpendIcon, TasksIcon } from '@/shared/ui/Icons/Icons';

export const earingItems: EaringItems = [
  {
    id: 1,
    icon: <EaringIcon />,
    title: 'EARINGS.earnings',
    subtitle: 'EARINGS.earnings_subtitle',
  },
  {
    id: 2,
    icon: <SpendIcon />,
    title: 'EARINGS.spend',
    subtitle: 'EARINGS.spend_subtitle',
  },
  {
    id: 3,
    title: 'EARINGS.sales',
    subtitle: 'EARINGS.sales_subtitle',
    extraTitle: 'EARINGS.sales_extra',
  },
  {
    id: 4,
    title: 'EARINGS.balance',
    subtitle: 'EARINGS.balance_subtitle',
  },
  {
    id: 5,
    icon: <TasksIcon />,
    title: 'EARINGS.tasks',
    subtitle: 'EARINGS.tasks_subtitle',
  },
  {
    id: 6,
    icon: <ProjectsIcon />,
    title: 'EARINGS.projects',
    subtitle: 'EARINGS.projects_subtitle',
  },
];
