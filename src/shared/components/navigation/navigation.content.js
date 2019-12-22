import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TheatersIcon from '@material-ui/icons/Theaters';
import MovieIcon from '@material-ui/icons/Movie';

import NavigationContext from 'shared/components/navigation/modules/services/navigation.context';

const Contianer = () => {
  const { classes, isOpen, toggleDrawer } = useContext(NavigationContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography noWrap variant="h6">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SideList />
      </SwipeableDrawer>
    </div>
  );
};

const SideList = () => {
  const { classes, toggleDrawer } = useContext(NavigationContext);

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          component={NavLink}
          activeClassName={classes.active}
          exact
          button
          to="/"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          component={NavLink}
          activeClassName={classes.active}
          exact
          button
          to="/theater"
        >
          <ListItemIcon>
            <TheatersIcon />
          </ListItemIcon>

          <ListItemText primary="Theater" />
        </ListItem>

        <ListItem
          component={NavLink}
          activeClassName={classes.active}
          exact
          button
          to="/movie"
        >
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>

          <ListItemText primary="Movie" />
        </ListItem>
      </List>
    </div>
  );
};

export default Contianer;
