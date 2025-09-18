import { type ReactNode, type FC } from 'react';
import Sidebar from '@/widgets/ui/Sidebar/Sidebar';

// TODO: This component will be adding for HomePage

export type HomeProps = {
  children?: ReactNode;
};

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

Home.displayName = 'Home';

export default Home;
