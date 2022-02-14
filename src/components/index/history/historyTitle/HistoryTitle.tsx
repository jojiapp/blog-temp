import styled from 'styled-components';

const HistoryTitle = () => (
    <Container>
      <Title>{'I\'ve'} been doing this for a while.</Title>
      <Description>이러쿵 저러쿵 그러쿵 이러쿵 저러쿵 그러쿵 이러쿵 저러쿵 그러쿵</Description>
    </Container>
);

// === Styled === //

const Container = styled.div`
  flex: 1;
  padding-right: 20rem;
`;

const Title = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 5.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: var(--gray);
`;

export default HistoryTitle;