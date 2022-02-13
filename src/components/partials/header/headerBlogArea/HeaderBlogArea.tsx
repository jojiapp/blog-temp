import React from 'react';
import styled from 'styled-components';
import HeaderSearch from './HeaderSearch';
import HeaderBlogButton from './HeaderBlogButton';

const HeaderBlogArea = () => (
    <BlogMoveWrapper>
      <HeaderSearch />
      <HeaderBlogButton />
    </BlogMoveWrapper>
);

// === Styled === //

export const BlogMoveWrapper = styled.div`
  display: flex;
`;

export default HeaderBlogArea;
