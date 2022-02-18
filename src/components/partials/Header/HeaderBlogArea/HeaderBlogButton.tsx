import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'

const blogLink = '/blog'

const HeaderBlogButton = () => (
	<Link href={blogLink}>
		<a>
			<Box>
				<Text>기술 블로그</Text>
				<IconBox>
					<FontAwesomeIcon icon={faAngleRight}/>
				</IconBox>
			</Box>
		</a>
	</Link>
)

// === Styled === //

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--point);
  width: 14.6rem;
  height: 4.6rem;
  border: 1px var(--point) solid;
  border-radius: 0.5rem;
`

const Text = styled.span`
  margin-right: 1rem;
`

const IconBox = styled.div`
  color: var(--point);
`

export default HeaderBlogButton
