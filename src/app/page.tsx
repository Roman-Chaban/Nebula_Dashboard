import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/config/constants';

const { DASHBOARD } = ROUTES;

export default function Home() {
  redirect(DASHBOARD);
}
