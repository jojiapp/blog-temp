import React from 'react';

export type SearchInputType = {
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchIconOnClick: () => void;
}