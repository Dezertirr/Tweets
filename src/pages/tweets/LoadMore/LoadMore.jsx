import React from 'react';
import {
  LoadMoreBtn
} from './LoadMore.styled'

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

export default LoadMore;
