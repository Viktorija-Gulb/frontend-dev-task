import React from 'react';
import { AppBar, Link, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.primary.contrastText,
    boxShadow: 'none',
  },
  link: {
    color: 'black',
    margin: '0 10px',
  },
}));

interface NavigationItem {
  title: string;
  to: string;
  pageTitle: string;
}
const navigation: NavigationItem[] = [
  {
    title: 'Services',
    to: '/services',
    pageTitle: 'Welcome',
  },
  {
    title: 'Clients',
    to: '/clients',
    pageTitle: 'Welcome',
  },
  {
    title: 'About us',
    to: '/about',
    pageTitle: 'About',
  },
  {
    title: 'Members',
    to: '/members',
    pageTitle: 'Welcome',
  },
  {
    title: 'Contacts',
    to: '/contacts',
    pageTitle: 'Welcome',
  },
];

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
        {navigation.map((item: NavigationItem) => (
          <Link
            key={item.title}
            to={item.to}
            component={NavLink}
            className={classes.link}
          >
            {item.title}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
