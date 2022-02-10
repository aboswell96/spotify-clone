import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  container: {
    backgroundColor: '#121212',
    width: '100%',
    paddingLeft: '30px',
    paddingTop: '10px',
  },
  tracks: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    width: 'auto',
  },
  search: {
    height: '35px',
    width: '365px',
    borderRadius: '500px',
    outline: 'none',
    letterSpacing: 'normal',
    fontSize: '1em',
  },
  fragmentTitle: {
    color: 'white',
    fontSize: '1.5em',
    marginBottom: '20px',
    fontFamily: 'CircularBold',
  },
  topResult: {
    color: 'white',
    cursor: 'pointer',
    width: '415px',
    height: '195px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
    paddingTop: '20px',
    backgroundColor: '#181818',
    fontFamily: 'CircularBold',
    '&:hover': { backgroundColor: '#242424', transitionDuration: '0.2s' },
  },
  artistHero: {
    height: '95px',
    width: '95px',
    borderRadius: '50%',
    boxShadow: '0 0 10px 3px #181818',
  },
  displayText: {
    color: 'white',
    fontSize: '2em',
    fontFamily: 'CircularBold',
  },
  song: {
    height: '56px',
    width: '100%',
    fontSize: '1em',
    borderRadius: '10px',
    fontFamily: 'CircularCyr',
    '&:hover': { backgroundColor: '#242424', transitionDuration: '0.2s' },
  },
}));

//mouseover #242424
