import type {NextPage} from 'next';
import styled from 'styled-components';
import Profile from '../src/components/index/Profile';

const Home: NextPage = () => {
  return (
      <Profile />
  );
};

const Container = styled.div`
  background-color: antiquewhite;
`;

export default Home;