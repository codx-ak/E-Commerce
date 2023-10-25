import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './nav.css'
import { Authenticate } from '../../Auth/AuthContext' 
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //auth value checking
  const { IsAuth } = React.useContext(Authenticate);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor:'white'}} position='static'>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,color:'orange',fontSize:'30px' }}>
            Codx.
          </Typography>
            <div>
            <Link to='/cart'>
              <IconButton
              size="large"
              >
              <LocalMallIcon sx={{color:'black',fontSize:'20px'}}/>
              </IconButton>
              </Link>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{margin:'0 10px'}}
              >
                <SettingsIcon sx={{color:'black',fontSize:'20px'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to='/home'><MenuItem onClick={handleClose}><Button startIcon={<HomeIcon/>}>Home</Button></MenuItem></Link>
                <Link to='/orders'><MenuItem onClick={handleClose}><Button startIcon={<StorefrontIcon/>}>Products</Button></MenuItem></Link>
                <Link to='/orders'><MenuItem onClick={handleClose}><Button startIcon={<LocalShippingIcon/>}>Orders</Button></MenuItem></Link>
                {
                  IsAuth ?<Link to='/profile'><MenuItem onClick={handleClose}><Button startIcon={<PersonIcon/>}>Account</Button></MenuItem></Link>
                  : <Link to='/login'><MenuItem onClick={handleClose}><Button startIcon={<AdminPanelSettingsIcon/>}>Login</Button></MenuItem></Link>
                }
                
                
              </Menu>
            </div>
            </Toolbar>
      </AppBar>
    </Box>
  );
}