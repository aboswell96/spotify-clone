import React, { useEffect, useState } from 'react';
import { SpotifySearchItem } from '../spotify/spotify';
import useStyles from './styles.js';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //search input
  const [searchValue, setSearchValue] = useState('');
  const onChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length > 0) {
      SpotifySearchItem(e.target.value)
        .then((response) => {
          setQuery(response);
        })
        .catch((error) => {
          setError(true);
          console.log('Failed to query ' + error);
        });
    }
  };

  //TODO: why does switching line 16 and 17 not work?
  useEffect(() => {
    SpotifySearchItem('miley cyrus')
      .then((response) => {
        setQuery(response);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setError(true);
        console.log('Failed to query ' + error);
      });
  }, []);

  useEffect(() => {
    console.log(
      'render isLoading ' + isLoading + ' query ' + Object.entries(query).length
    );
  });

  return (
    <div className={classes.container}>
      <SearchBar value={searchValue} onChange={onChange} />
      <div className={classes.tracks}>
        {!isLoading &&
          !error &&
          Object.entries(query).length > 0 &&
          query.data.tracks.items.map((item, j) => {
            return <span key={j}>{item.name}</span>;
          })}
      </div>
      {error && <span>Failed to Query - Spotify did not reply</span>}
    </div>
  );
};

const SearchBar = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange}></input>
    </div>
  );
};

export default Search;
