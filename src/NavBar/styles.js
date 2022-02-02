import { makeStyles } from '@mui/styles';

export default makeStyles((props) => ({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '300px',
    color: 'white',
    paddingTop: '24px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    // gap: '10px',
    marginInline: 'auto',
    alignItems: 'left',
  },
  tab: {
    width: 'auto',
    backgroundColor: 'black',
    color: (props) => props.color,
    paddingLeft: '24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    height: '40px',
    fontSize: '14px',
    fontFamily: 'CircularBold',
    '&:hover': { color: 'white', transitionDuration: '0.2s' },
  },
}));
