import React, { useEffect, useState } from 'react';
import { SpotifySearchItem } from '../spotify/spotify';
import useStyles from './styles.js';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //TODO: why does switching line 16 and 17 not work?
  useEffect(() => {
    SpotifySearchItem()
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

  return (
    <div className={classes.tracks}>
      search
      {!isLoading &&
        !error &&
        query.data.tracks.items.map((item, j) => {
          return <span>{item.name}</span>;
        })}
      {error && <span>Failed to Query - Spotify did not reply</span>}
    </div>
  );
};

export default Search;
