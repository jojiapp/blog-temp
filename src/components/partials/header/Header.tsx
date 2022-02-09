import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {
  ButtonBox,
  ButtonIconBox,
  ButtonText,
  HeaderContainer,
  Logo, RightWrapper, SearchIconBox, SearchInput, SearchWrapper,
} from './HeaderStyles';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import React, {useRef} from 'react';
import {SearchInputType} from './headerTypes';

const Header = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchIconOnClick = () => {
    console.log(searchInputRef.current?.value);
  };

  return (
      <HeaderContainer>
        <Logo>JOJI</Logo>

        <RightWrapper>
          <Search searchInputRef={searchInputRef}
                  searchIconOnClick={searchIconOnClick} />
          <Link href={'/blog'}>
            <BlogButton />
          </Link>
        </RightWrapper>
      </HeaderContainer>
  );
};

const BlogButton = () => (
    <ButtonBox>
      <ButtonText>기술 블로그</ButtonText>
      <ButtonIconBox>
        <FontAwesomeIcon icon={faAngleRight} />
      </ButtonIconBox>
    </ButtonBox>
);

const Search = ({searchInputRef, searchIconOnClick}: SearchInputType) => (
    <SearchWrapper>
      <SearchInput placeholder={'Search...'} ref={searchInputRef} />
      <SearchIconBox onClick={searchIconOnClick}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIconBox>
    </SearchWrapper>
);

export default Header;