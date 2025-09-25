import Home from '@/pages/home/ui/Home';
import { Header } from '@/widgets/Header/ui/Header';
import { Container } from '@/shared/ui/Container/Container';

export default function HomePage() {
  return (
    <Container htmlTag="div" className="flex">
      <Home />
      <Header title="Main Dashboard" subtitle="Pages / Dashboard" />
    </Container>
  );
}
