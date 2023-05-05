import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LoginWith } from '../LoginWith/LoginWith';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

export const Register = () => {
    return (
        <Paper 
        sx={{ 
            width: '400px', 
            height: '580px', 
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            padding: '3%',
            borderRadius: '10px'
            }} 
            elevation={6}>

            <Grid 
            container 
            sx={{ padding: '5px' }}>

                    <Grid xs={12}  sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '5%' }}>
                        <Typography variant='h5'>Login</Typography>
                        <Typography component={Link} to='/register' color='primary' variant=''>Don&apos;t have an account?</Typography>
                    </Grid>
                
                    <form style={{ width: '100%' }}>

                        <Stack direction='row' spacing={2} textAlign='left' marginBottom={3}>
                            <Grid item>
                                <FormLabel sx={{ fontSize: '16px' }}>First Name*</FormLabel>
                                <OutlinedInput
                                name="name"
                                type="text"
                                placeholder="John"
                                size='small'
                                fullWidth
                                disableUnderline />
                            </Grid>
                            <Grid item>
                                <FormLabel sx={{ fontSize: '16px' }}>Last Name*</FormLabel>
                                <OutlinedInput
                                name="name"
                                type="text"
                                placeholder="Doe"
                                size='small'
                                fullWidth
                                disableUnderline />
                            </Grid>
                        </Stack>

                        <Grid item xs={12}  sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} rowGap={1} >
                            
                                <FormLabel sx={{ fontSize: '16px' }}>Email Adresss*</FormLabel>
                                <OutlinedInput
                                name="email"
                                type="email"
                                placeholder="johndoe@email.com"
                                size='small'
                                fullWidth
                                disableUnderline />
                    
                        </Grid>

                        <Grid item xs={12} 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            flexWrap: 'wrap', 
                            marginTop: '20px' }} 
                            rowGap={1}>
                
                                <FormLabel sx={{ fontSize: '16px' }}>Password*</FormLabel>
                                <OutlinedInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                size='small'
                                fullWidth
                                disableUnderline />
                        
                        </Grid>
                        
                        <Grid item xs={12} marginTop={2}>
                            <FormGroup>
                                <FormControlLabel sx={{ 
                                    '& .MuiTypography-root': { fontSize: 14 } }} 
                                    control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} 
                                    label="Keep me sign in" />
                            </FormGroup>
                        </Grid>

                        <Grid item xs={12} marginTop={2}>
                            <Button type='submit' variant='contained' size='small' fullWidth>Login</Button>
                        </Grid>

                    </form>
                    
                    
                        
                    
            </Grid>
            
            <Box marginTop={4}>
                <Divider>
                    <Chip variant='filled' color='success' label="Login with" />
                </Divider>
            </Box>
            <Box marginTop={4}>
                <LoginWith />
            </Box>

        </Paper>
    );
}

