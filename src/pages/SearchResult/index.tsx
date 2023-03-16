import React from 'react';

import SearchResultContainer from 'container/SearchResult';

const SearchResult: React.FC = (props) => (
  <div className="p-searchResult">
    <SearchResultContainer {...props} />
  </div>
);

export default SearchResult;
