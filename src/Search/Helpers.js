import React, { useEffect } from 'react';
import useStyles from './styles.js';
import { useWindowSize } from '../CustomHooks/useWindowSize.js';

export const TopResult = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fragmentTitle}>Top result</div>
      <div className={classes.topResult}>
        <img
          alt="artist"
          src={props.artist.images[0].url}
          className={classes.artistHeroMain}
        ></img>
        <span
          style={{
            fontSize: '2em',
            fontFamily: 'CircularBold',
            fontWeight: '700',
            letterSpacing: '-.04em',
            lineHeight: '36px',
            marginTop: '20px',
          }}
        >
          {props.artist.name}
        </span>
        <span
          style={{
            background: 'black',
            padding: '5px',
            paddingInline: '10px',
            borderRadius: '15px',
            fontSize: '0.75em',
            fontFamily: 'CircularBold',
            width: '45px',
            marginTop: '3px',
            letterSpacing: '.04em',
          }}
        >
          ARTIST
        </span>
      </div>
    </div>
  );
};

export const TopSongs = (props) => {
  const classes = useStyles();
  return (
    <div style={{ 'flex-grow': '1', width: 'auto' }}>
      <div className={classes.fragmentTitle}>Songs</div>
      <div className={classes.tracks}>
        {props.tracks.slice(0, 4).map((item, j) => {
          return <Song key={j} song={item} />;
        })}
      </div>
    </div>
  );
};

const Song = (props) => {
  console.log(props);
  const classes = useStyles();

  const artists = props.song.artists.map((s) => s.name).join(', ');
  const albumPhoto = props.song.album.images[0].url;

  return (
    <div className={classes.song2}>
      <div className={classes.song}>
        <img
          src={albumPhoto}
          alt="album"
          height="40px"
          width="40px"
          borderRadius="3px"
        ></img>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{props.song.name}</div>
          <div
            style={{
              color: '#b3b3b3',
              fontSize: '14px',
              fontFamily: 'CircularBook',
            }}
          >
            {artists}
          </div>
        </div>
      </div>
      <div className={classes.song}>
        <div style={{ marginRight: '5px' }}>
          {millisToMinutesAndSeconds(props.song.duration_ms)}
        </div>
      </div>
    </div>
  );
};

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

export const Artists = (props) => {
  const classes = useStyles();
  const size = useWindowSize();
  let oneArtistSize = 250;
  let numArtists = Math.round((size.width - 160) / oneArtistSize);
  let artists = props.artists.slice(0, numArtists).map((artist, i) => {
    return <Artist x={artist} />;
  });

  return (
    <div id="artists">
      <div className={classes.fragmentTitle}>Artists</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        {artists}
      </div>
    </div>
  );
};

const Artist = (props) => {
  const classes = useStyles();
  const photo =
    props.x.images[0] && props.x.images[0].url
      ? props.x.images[0].url
      : 'https://i.ibb.co/CVryQwX/no-photo.png';
  return (
    <div className={classes.artist}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={photo} alt="album" className={classes.artistHeroSub}></img>
        <div
          style={{
            marginTop: '20px',
            'text-overflow': 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maxWidth: '170px',
          }}
        >
          {props.x.name}
        </div>
        <span style={{ color: 'grey', fontSize: '1em', fontFamily: '' }}>
          Artist
        </span>
      </div>
    </div>
  );
};
