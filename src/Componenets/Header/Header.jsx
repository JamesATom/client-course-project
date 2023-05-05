import { useContext, useState } from 'react';
import { ColorModeContext } from '../../App';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import TranslateIcon from '@mui/icons-material/Translate';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (lng) => {
        setAnchorEl(null);
        i18n.changeLanguage(lng);
        console.log('what a hell: ', process.env.REACT_APP_PROJECT_ID, 'Process: ', process.env);
    }

    return (
        <>
            <AppBar>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <IconButton disableRipple>
                        <ReviewsIcon fontSize='large' />
                    </IconButton>

                    <Box>
                        <IconButton 
                        id="fade-button" 
                        aria-controls={open ? 'fade-menu' : undefined} 
                        aria-haspopup="true" 
                        aria-expanded={open ? 'true' : undefined} 
                        onClick={handleClick}>
                            <TranslateIcon />
                        </IconButton>

                        <Menu 
                        id="fade-menu" 
                        MenuListProps={{'aria-labelledby': 'fade-button'}} 
                        anchorEl={anchorEl} 
                        open={open} 
                        onClose={() =>  setAnchorEl(null)} 
                        TransitionComponent={Fade} >
                            <MenuItem onClick={() => handleClose('en')} disabled={i18n.resolvedLanguage === 'en'}> English (USA) </MenuItem>
                            <MenuItem onClick={() => handleClose('ru')}  disabled={i18n.resolvedLanguage === 'ru'}> Russian (RU) </MenuItem>
                        </Menu>

                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>

                        <Button 
                        sx={{ ml: 1  }} 
                        variant='contained' 
                        color='success'
                        LinkComponent={Link} 
                        to='/login'>Login</Button>

                    </Box>

                </Toolbar>
            </AppBar>

            <Typography marginTop={20}>
                {t('greeting', "how's everything brother?")}
            </Typography>

        </>
    );
}

export default Header;

// bgcolor: 'background.default',
// color: 'text.primary', {theme.palette.mode} mode 
