import { useContext } from 'react';
import { ColorModeContext } from '../../App';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

const Header = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Stack>
            <AppBar>
                <Toolbar>
                    {theme.palette.mode} mode
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Stack>
    );
}

export default Header;

// bgcolor: 'background.default',
// color: 'text.primary',