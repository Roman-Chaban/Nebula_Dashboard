import { type ReactNode, type FC } from 'react';

// TODO: This component will be adding for HomePage

export type HomeProps = {
  children: ReactNode;
};

export const Home: FC<HomeProps> = ({ children }) => {
  return <section>{children}</section>;
};

Home.displayName = 'Home';

export default Home;
