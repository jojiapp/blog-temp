import React from 'react'
import styled from 'styled-components'
import HeaderLogo from './HeaderLogo'
import HeaderBlogArea from './HeaderBlogArea'

const Header = () => (
	<Container>
		<HeaderLogo/>
		<HeaderBlogArea/>
	</Container>
)

// === Styled === //

const Container = styled.header`
  padding: 12rem 0 16rem;
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`

export default Header