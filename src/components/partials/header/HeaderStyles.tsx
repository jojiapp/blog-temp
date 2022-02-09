import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 12rem 0 16rem;
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`;

export const Logo = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  color: var(--point);
`;

export const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--point);
  font-size: 1.6rem;
  width: 14.6rem;
  height: 4.6rem;
  border: 1px var(--point) solid;
  border-radius: 0.5rem;
`;

export const RightWrapper = styled.div`
  display: flex;
`;

export const ButtonText = styled.span`
  margin-right: 1rem;
`;

export const ButtonIconBox = styled.div`
  font-size: 1.6rem;
  color: var(--point)
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

export const SearchInput = styled.input`
  width: 15rem;
  border-radius: 999px;
  margin-right: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const SearchIconBox = styled.div`
  font-size: 2rem;
  color: var(--point);
  cursor: pointer;
`;