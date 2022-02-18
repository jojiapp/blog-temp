import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import styled from 'styled-components'

const HeaderSearch = () => {
	const searchInputRef = useRef<HTMLInputElement>(null)
	const searchIconOnClick = () => {
		console.log(searchInputRef.current?.value)
	}
	return (
		<Wrapper>
			<SearchInput placeholder={'Posts Search...'} ref={searchInputRef}/>
			<IconBox onClick={searchIconOnClick}>
				<FontAwesomeIcon icon={faSearch}/>
			</IconBox>
		</Wrapper>)
}

// === Styled === //

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`

const SearchInput = styled.input`
  width: 15rem;
  border-radius: 999px;
  margin-right: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

const IconBox = styled.div`
  font-size: 2rem;
  color: var(--point);
  cursor: pointer;
`

export default HeaderSearch