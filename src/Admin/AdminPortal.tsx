import { CssBaseline, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes, useRoutes } from 'react-router-dom';
import { PrivateRoute } from './AdminAuth';
import { AuthProvider } from './contexts/AuthContext';
import Home from './screens/Home';
import Login from './screens/Login';
import SideNavigation from './components/SideNavigation';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';
import { Box } from '@mui/system';
import Header from './components/Header';
import EstablishmentList from './screens/establishments/EstablishmentList';
import EstablishmentEdit from './screens/establishments/EstablishmentEdit';

const drawerWidth = 256;

// const AdminRouter2 = () => {
//   return useRoutes([
//     {
//       path: '/',
//       element: () => <Home />
//     },
//     {
//       path: 'thing',
//       element: () => <p>Hello</p>
//     }
//   ]);
// };

// export default AdminRouter2;

const AdminRouter = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleToggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <CssBaseline />
          <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            {isSmUp ? null : (
              <SideNavigation
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleToggleDrawer}
              />
            )}
            <SideNavigation
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: 'block', xs: 'none' } }}
            />
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Header onDrawerToggle={handleToggleDrawer} />
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
              <Routes>
                <Route path="/admin/login" element={<Login />} />
                <Route path="establishments" element={<PrivateRoute />}>
                  <Route path="" element={<EstablishmentList />} />
                  <Route path=":id" element={<EstablishmentEdit />} />
                </Route>
                {/* <PrivateRoute path="/" element={<Home />} /> */}
              </Routes>
            </Box>
            {/* <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                <Copyright />
              </Box> */}
          </Box>
        </Box>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AdminRouter;
