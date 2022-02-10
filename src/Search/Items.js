import React from 'react';
import useStyles from './styles.js';

export const TopResult = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fragmentTitle}>Top Result</div>
      <div className={classes.topResult}>
        <img
          alt="artist"
          src={props.artist.images[0].url}
          className={classes.artistHero}
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
    <div>
      <div className={classes.fragmentTitle}>Songs</div>
      <div className={classes.tracks}>
        {props.tracks.slice(0, 4).map((item, j) => {
          return <Song key={j} name={item.name} />;
        })}
      </div>
    </div>
  );
};

const Song = (props) => {
  const classes = useStyles();
  return <div className={classes.song}>{props.name}</div>;
};
