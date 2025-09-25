import { type FC } from 'react';
import { Sidebar } from '@/widgets/Sidebar/index';

// TODO: This component will be adding for HomePage

const Home: FC = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

Home.displayName = 'Home';

export default Home;
