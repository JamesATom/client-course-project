// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from '../Icons/google.svg';
import Twitter from '../Icons/twitter.svg';
import Facebook from '../Icons/facebook.svg';
import GitHub from '../Icons/github.svg';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

export const LoginWith = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const googleHandler = async () => {
        window.open('https://server-course-project-production.up.railway.app/login/google', '_self'); 
    };

    const twitterHandler = async () => {
        // login || singup
    };

    const gitHubHandler = async () => {
        // login || singup
    };

    return (
        <Stack
            direction="row"
            spacing={matchDownSM ? 1 : 2}
            justifyContent={matchDownSM ? 'space-around' : 'space-between'}
            sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
        >
            <Button
                variant="outlined"
                color="primary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Google} alt="Google" />}
                onClick={googleHandler}
            >
                {!matchDownSM && 'Google'}
            </Button>
            <Button
                variant="outlined"
                color="primary"
                fullWidth={!matchDownSM}
                startIcon={<img src={Twitter} alt="Twitter" />}
                onClick={twitterHandler}
            >
                {!matchDownSM && 'Twitter'}
            </Button>
            <Button
                variant="outlined"
                color="primary"
                fullWidth={!matchDownSM}
                startIcon={<img src={GitHub} alt="GitHub" />}
                onClick={gitHubHandler}
            >
                {!matchDownSM && 'GitHub'}
            </Button>
        </Stack>
    );
};