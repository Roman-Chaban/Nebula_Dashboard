import { redirect } from 'next/navigation';
import { ROUTES, LOCALES } from '@/shared/config/constants';

const { DASHBOARD } = ROUTES;


export default function Home() {
  const locale = LOCALES.EN;
  redirect(`/${locale}/${DASHBOARD}`);
}
