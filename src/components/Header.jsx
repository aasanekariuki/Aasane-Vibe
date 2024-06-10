import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import styles from './Search.module.css';
import TopBar from './TopBar';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#AA00FF' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aasane vibe
        </Typography>
        <div className={styles.search}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
            
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Your Library</Button>
          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
      <TopBar />
    </AppBar>
  );
};

export default Header;
