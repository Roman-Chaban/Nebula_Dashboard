import {
  TableProcessesHeadings,
  TableProcessItems,
} from '@/widgets/CheckTable/model/types';

export const tableProcessesHeadings: TableProcessesHeadings = [
  { id: 1, heading: 'NAME' },
  { id: 2, heading: 'PROGRESS' },
  { id: 3, heading: 'QUANTITY' },
  { id: 4, heading: 'DATE' },
];

export const tableProcessesList: TableProcessItems = [
  {
    id: 1,
    name: 'Horizon UI PRO',
    progress: '17.5%',
    quantity: '2.458',
    date: '24.Jan.2021',
  },
  {
    id: 2,
    name: 'Horizon UI Free',
    progress: '10.8%',
    quantity: '1.485',
    date: '12.Jun.2021',
  },
  {
    id: 3,
    name: 'Weekly Update',
    progress: '21.3%',
    quantity: '1.024',
    date: '5.Jan.2021',
  },
  {
    id: 4,
    name: 'Venus 3D Asset',
    progress: '31.5%',
    quantity: '858',
    date: '7.Mar.2021',
  },
  {
    id: 5,
    name: 'Marketplace',
    progress: '12.2%',
    quantity: '258',
    date: '17.Dec.2021',
  },
];
