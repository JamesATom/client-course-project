import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Componenets/Root/Root';
import { Login } from './Componenets/LoginPage/Login';
import { Register } from './Componenets/SignUpPage/Register';
import { Register2 } from './Componenets/SignUpPage/Register2';
import { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={ <Root /> }>
                
            </Route>
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/register2' element={ <Register2 /> } />
        </>
    )
);

function App() {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(() => ({
                toggleColorMode: () => {
                    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                }
            }),
        [],
    );

    const theme = useMemo(() =>
        createTheme({
            palette: { mode },},),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <RouterProvider router={ router } />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
