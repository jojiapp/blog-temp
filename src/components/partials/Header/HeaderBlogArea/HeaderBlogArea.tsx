import React from 'react'
import styled from 'styled-components'
import HeaderSearch from './HeaderSearch'
import HeaderBlogButton from './HeaderBlogButton'

const HeaderBlogArea = () => (
	<Wrapper>
		<HeaderSearch/>
		<HeaderBlogButton/>
	</Wrapper>
)

// === Styled === //

export const Wrapper = styled.div`
  display: flex;
`

export default HeaderBlogArea
