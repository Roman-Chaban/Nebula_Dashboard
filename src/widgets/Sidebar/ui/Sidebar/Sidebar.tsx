import { type FC } from 'react';
import { SidebarLogo, SidebarNav, SidebarUpsellCard } from '@/widgets/Sidebar/index';
import { Container } from '@/shared/ui/Container/Container';
import { sidebarNavItems, upsellCardInfo } from '@/widgets/Sidebar/model/config';

const Sidebar: FC = () => {
  return (
    <Container
      htmlTag="aside"
      width="100%"
      height="100%"
      className="flex min-h-screen max-w-72 flex-col bg-white"
    >
      <SidebarLogo />
      <SidebarNav items={sidebarNavItems} />
      <SidebarUpsellCard info={upsellCardInfo} />
    </Container>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
