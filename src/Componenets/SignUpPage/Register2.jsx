import { Link } from 'react-router-dom';
import { LoginWith } from '../LoginWith/LoginWith';
import { strengthColor, strengthIndicator } from '../Validation Functions/password-strength';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';

export const Register2 = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [password, setPassword] = useState();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState();

    const handleSubmit = () => {

    }

    const handleChangePasswordStrenght = ({target}) => {
        setPassword(target.value);
        const temp = strengthIndicator(target.value);
        setLevel(strengthColor(temp));
    }

    return (
        <div style={{ 
            height: '', 
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }}>
            <Paper elevation={6}
            component={Grid}
            container
            sx={{
                width: matches ? '360px' : '450px', 
                height: '650px', 
                borderRadius: '10px',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                display: 'grid',
                gridTemplateColumns: matches ? '310px' : '400px',
                gridTemplateRows: 'repeat(7, 1fr)',
                justifyContent: 'center',
                rowGap: '',
            }}>

                <Grid item xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '',
                    gap: '30%'
                }}>
                    <Typography variant={ matches ? 'subtitle1' : 'h5' }>
                        Sign up
                    </Typography>
                    <Typography component={Link} to='/' color='primary' variant=''>Already have an account?</Typography>
                </Grid>

                <Stack 
                    direction='row' 
                    spacing={4} 
                    textAlign='left'
                    border=''
                    display='flex'
                    alignItems='center'
                    component={Grid} 
                    item>
                    <Box>
                        <FormLabel>First Name*</FormLabel>
                        <OutlinedInput
                            name="name"
                            type="text"
                            placeholder="John"
                            size='small'
                            value={name}
                            onChange={({target}) => setName(target.value)}
                            fullWidth
                            disableUnderline />
                    </Box>
                    <Box>
                        <FormLabel>Last Name*</FormLabel>
                        <OutlinedInput
                            name="lastname"
                            type="text"
                            placeholder="Doe"
                            size='small'
                            value={lastname}
                            onChange={({target}) => setLastname(target.value)}
                            justifySelf={ matches ? 'start' : '' }
                            fullWidth
                            disableUnderline />
                    </Box>
                </Stack>
            
                <Grid
                    display='flex'
                    alignContent='center' 
                    flexWrap='wrap'
                    item 
                    textAlign='left' 
                    border=''>
                    <FormLabel>Email Adresss*</FormLabel>
                    <OutlinedInput
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        size='small'
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        fullWidth
                        disableUnderline />
                </Grid>

                <Grid
                    display='flex'
                    flexWrap='wrap' 
                    alignContent='center'
                    item 
                    border=''>
                    <FormLabel sx={{ fontSize: '16px' }}>Password*</FormLabel>
                    <OutlinedInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        size='small'
                        value={password}
                        onChange={handleChangePasswordStrenght}
                        fullWidth
                        disableUnderline />

                    <FormControl fullWidth sx={{ mt: 0.5 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" fontSize="0.75rem">
                                    {level?.label}
                                </Typography>
                            </Grid>
                        </Grid>
                    </FormControl>
                </Grid>

                <Grid
                    display='flex'
                    alignItems='center' 
                    item 
                    border=''>
                    <Typography variant="">
                        By Signing up, you agree to our &nbsp;
                        <Link component={Link} to="#">
                            Terms of Service
                        </Link>
                        &nbsp; and &nbsp;
                        <Link component={Link} to="#">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Grid>

                <Grid
                    display='flex'
                    alignItems='start'
                    flexWrap='wrap'
                    justifyContent='center'
                    item 
                    border=''>
                    <Button type='submit' variant='contained' size='large' color='info' onClick={handleSubmit} fullWidth>Create Acocunt</Button>
                    <Box marginTop={2}>
                        <Divider>
                            <Chip variant='filled' label="Sign up with" />
                        </Divider>
                    </Box>
                </Grid>
            
                <Grid 
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    item 
                    border=''>
                    <LoginWith />
                </Grid>
            </Paper>
        </div> 
    );
}



// display={ matches ? 'grid' : '' }
// flexWrap={ matches ? 'wrap' : '' } 
// rowGap={ matches ? '20px' : '' }