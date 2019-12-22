import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from 'shared/components/navigation/navigation.content';
import NavigationContext from 'shared/components/navigation/modules/services/navigation.context';

const Navigation = () => {
  const useStyles = makeStyles(theme => ({
    active: {
      backgroundColor: theme.palette.action.selected,
    },
    fullList: {
      width: 'auto',
    },
    list: {
      width: 250,
    },
  }));

  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <NavigationContext.Provider
      value={{
        classes,
        isOpen,
        toggleDrawer,
      }}
    >
      <Container />
    </NavigationContext.Provider>
  );
};

export default Navigation;
