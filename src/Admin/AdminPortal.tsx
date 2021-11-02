import { CssBaseline, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './AdminAuth'
import { AuthProvider } from './contexts/AuthContext'
import Home from "./screens/Home";
import Login from './screens/Login'
import SideNavigation from './components/SideNavigation'
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme'
import { Box } from '@mui/system';
import Header from './components/Header'
import EstablishmentList from './screens/establishments/EstablishmentList'

const drawerWidth = 256;

const AdminRouter = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  const handleToggleDrawer = () => setMobileOpen(!mobileOpen)

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
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
              <Router>
                <Switch>
                  <Route path="/admin/login" component={Login} />
                  <PrivateRoute exact path="/admin/establishments" component={EstablishmentList} />
                  
                  <PrivateRoute exact path="/" component={Home} />
                </Switch>
              </Router>
            </Box>
            {/* <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                <Copyright />
              </Box> */}
          </Box>
        </Box>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default AdminRouter
