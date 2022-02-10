import React, { useState } from 'react';
import { SpotifySearchItem } from '../spotify/spotify';
import useStyles from './styles.js';

import { TopResult, TopSongs } from './Items';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const onChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === '') {
      setQuery('');
    }

    if (e.target.value.length > 0) {
      SpotifySearchItem(e.target.value)
        .then((response) => {
          setQuery(response);
          console.log(response);
        })
        .catch((error) => {
          setQuery('');
          console.log('Failed to query ' + error);
        });
    }
  };

  return (
    <div className={classes.container}>
      <SearchBar value={searchValue} onChange={onChange} />
      <div style={{ display: 'flex', gap: '30px' }}>
        {query &&
          query.data &&
          query.data.artists &&
          query.data.artists.items.length > 0 && (
            <TopResult artist={query.data.artists.items[0]} />
          )}
        {query &&
          query.data &&
          query.data.tracks &&
          query.data.tracks.items.length > 0 && (
            <TopSongs tracks={query.data.tracks.items} />
          )}
      </div>
      {searchValue &&
        query &&
        query.data &&
        query.data.artists.items.length === 0 && (
          <span className={classes.displayText}>No Results Found</span>
        )}
      {!searchValue && (
        <span className={classes.displayText}>Start typing to Search...</span>
      )}
    </div>
  );
};

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: '30px' }}>
      <input
        className={classes.search}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Search;
