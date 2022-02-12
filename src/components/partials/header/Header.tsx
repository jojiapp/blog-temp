import React, {useRef} from 'react';
import styled from 'styled-components';
import HeaderLogo from './headerLogo/HeaderLogo';
import HeaderBlogMove from './headerBlogMove/HeaderBlogMove';

const Header = () => (
    <Container>
      <HeaderLogo />
      <HeaderBlogMove />
    </Container>
);

export default Header;

// === Styled === //

const Container = styled.header`
  padding: 12rem 0 16rem;
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`;