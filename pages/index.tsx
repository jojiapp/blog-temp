import type {NextPage} from 'next';
import Profile from '../src/components/index/profile/Profile';
import History from '../src/components/index/history';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
      <Container>
        <Profile />
        <History />
      </Container>
  );
};

// === Styled === //

const Container = styled.div`
  & > div:not(:last-of-type) {
    margin-bottom: 16rem;
  }
`;

export default Home;