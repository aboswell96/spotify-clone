import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import useStyles from './styles.js';

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
