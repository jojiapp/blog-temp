import styled, {DefaultTheme} from 'styled-components';
import BlogButton from './button/BlogButton';

const Header = () => {
  return (
      <Container>
        <Logo>JOJI</Logo>

        <BlogButton href={'/blog'} />
      </Container>)
      ;
};

const Container = styled.header`
  padding: 12rem 0 16rem;
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`;

const Logo = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  color: var(--point_color);
`;

export default Header;