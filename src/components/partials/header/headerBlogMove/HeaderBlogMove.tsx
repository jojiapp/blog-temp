import React from 'react';
import styled from 'styled-components';
import HeaderSearch from './HeaderSearch';
import HeaderBlogButton from './HeaderBlogButton';

const HeaderBlogMove = () => (
    <BlogMoveWrapper>
      <HeaderSearch />
      <HeaderBlogButton />
    </BlogMoveWrapper>
);

export default HeaderBlogMove;

// === Styled === //

export const BlogMoveWrapper = styled.div`
  display: flex;
`;