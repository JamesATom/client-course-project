import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LoginWith } from '../LoginWith/LoginWith';
import { strengthColor, strengthIndicator } from '../Validation Functions/password-strength';
import { useFormik } from 'formik';
import { validationSchema } from '../Validation Functions/yupValidate';
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
import FormHelperText from '@mui/material/FormHelperText';

export const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div style={{ 
            minWidth: '440px',
            height: '', 
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }}>
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
                padding: '30px',
                borderRadius: '10px'
                }} 
                elevation={6}>

                <Grid container sx={{ display: 'flex', flexShrink: 1, flexGrow: 1 }}>

                        <Grid xs={12}  sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            marginBottom: '5%',
                            flex: '1 1' }}>
                            <Typography variant='h5'>Login</Typography>
                            <Typography component={Link} to='/login' color='primary' variant=''>Already have an account?</Typography>
                        </Grid>
                    
                        <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                            <Stack direction='row' spacing={2} textAlign='left' marginBottom={3}>
                                <Grid item>
                                    <FormLabel sx={{ fontSize: '16px' }}>First Name*</FormLabel>
                                    <OutlinedInput
                                    name="name"
                                    type="text"
                                    placeholder="John"
                                    size='small'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    fullWidth
                                    disableUnderline />
                                    <FormHelperText style={{ color: 'red' }}>{formik.touched.name && formik.errors.name}</FormHelperText>
                                </Grid>
                                <Grid item>
                                    <FormLabel sx={{ fontSize: '16px' }}>Last Name*</FormLabel>
                                    <OutlinedInput
                                    name="lastname"
                                    type="text"
                                    placeholder="Doe"
                                    size='small'
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                    fullWidth
                                    disableUnderline />
                                    <FormHelperText style={{ color: 'red' }}>{formik.touched.lastname && formik.errors.lastname}</FormHelperText>
                                </Grid>
                            </Stack>

                            <Grid item xs={12}  sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} >
                                
                                    <FormLabel sx={{ fontSize: '16px' }}>Email Adresss*</FormLabel>
                                    <OutlinedInput
                                    name="email"
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    size='small'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    fullWidth
                                    disableUnderline />
                                    <FormHelperText style={{ color: 'red' }}>{formik.touched.email && formik.errors.email}</FormHelperText>
                        
                            </Grid>

                            <Grid item xs={12} 
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                flexWrap: 'wrap', 
                                marginTop: '20px' }} >
                    
                                    <FormLabel sx={{ fontSize: '16px' }}>Password*</FormLabel>
                                    <OutlinedInput
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    size='small'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    fullWidth
                                    disableUnderline />
                                    <FormHelperText style={{ color: 'red' }}>{formik.touched.password && formik.errors.password}</FormHelperText>
                            
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
        </div>
    );
}

