import React, { useState } from 'react';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

const NavBar = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className={classes.container}>
      <img
        src="https://i.ibb.co/7R2Nf0x/logo.png"
        alt="logo"
        style={{
          width: '130px',
          height: '40px',
          paddingLeft: '24px',
          marginBottom: '18px',
        }}
      />
      <nav>
        <div className={classes.links}>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              setActiveTab('Home');
            }}
          >
            <MenuTab text="Home" active={activeTab === 'Home'}></MenuTab>
          </Link>
          <Link
            to="/search"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              setActiveTab('Search');
            }}
          >
            <MenuTab text="Search" active={activeTab === 'Search'}></MenuTab>
          </Link>
          <Link
            to="/library"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              setActiveTab('Your Library');
            }}
          >
            <MenuTab
              text="Your Library"
              active={activeTab === 'Your Library'}
            ></MenuTab>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const MenuTab = (props) => {
  console.log(JSON.stringify(props));
  const styleProps = { color: props.active ? 'white' : '#212121' };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.tab}>
      {MenuStringToIcon(props.text)}
      {props.text}
    </div>
  );
};

const MenuStringToIcon = (menu) => {
  const fontSize = 30;
  switch (menu) {
    case 'Home':
      return <HomeIcon sx={{ fontSize: { fontSize } }} />;
    case 'Search':
      return <SearchIcon sx={{ fontSize: { fontSize } }} />;
    case 'Your Library':
      return <ListIcon sx={{ fontSize: { fontSize } }} />;
    default:
      return <HomeIcon sx={{ fontSize: { fontSize } }} />;
  }
};

export default NavBar;
