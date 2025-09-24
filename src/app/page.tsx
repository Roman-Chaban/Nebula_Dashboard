import Home from '@/pages/home/ui/Home';
import { Header } from '@/widgets/Header/ui/Header';

export default function HomePage() {
  return (
    <>
      <Header title="Main Dashboard" subtitle="Pages / Dashboard" />
      <Home />
    </>
  );
}
