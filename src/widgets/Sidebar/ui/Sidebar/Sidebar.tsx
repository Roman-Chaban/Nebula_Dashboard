import { type FC } from 'react';
import { SidebarLogo } from '@/widgets/Sidebar/ui/Sidebar/SidebarLogo';
import { Container } from '@/shared/ui/Container/Container';

// TODO: This component will be implementing soon [PR #7]
const Sidebar: FC = () => {
  return (
    <Container
      htmlTag="article"
      width="100%"
      height="100%"
      className="flex min-h-[100vh] max-w-72 justify-center bg-white"
    >
      <SidebarLogo />
    </Container>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
