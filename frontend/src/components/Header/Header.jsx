import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import SearchBar from './SearchBar';
import AvatarImg from '../../assets/avatar.png'
import { Avatar, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import './header.css'

const Header = () => {
  const CartCount=useSelector(state=>state.CartStore.value)
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    className='header-menu'
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Avatar alt="Ak" src={AvatarImg} sx={{ width: 50, height: 50 }}/></MenuItem>
      
      <MenuItem onClick={handleMenuClose}><Button variant='text' startIcon={<PersonIcon />}> <Link to='/profile'>Account</Link></Button></MenuItem>
      <MenuItem onClick={handleMenuClose}><Button variant='text' startIcon={<LocalShippingIcon />}> <Link to='/orders'>Orders</Link></Button></MenuItem>
      <MenuItem onClick={handleMenuClose}><Button variant='text' startIcon={<DoNotDisturbAltIcon />}> <Link to='/orders'>Logout</Link></Button></MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{margin:'0 30px'}}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },width:'30%' }}
          >
            E Commerce
          </Typography>
          
          <Box sx={{ width:'40%' }} >
          <SearchBar/>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, width:'30%',justifyContent:'right' }}>
            <IconButton size="large" aria-label="" color="inherit">
              <Link to='/cart'>
            <Badge badgeContent={CartCount.length} color="error">
              <LocalMallIcon/>
            </Badge>
            </Link>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PersonIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Header