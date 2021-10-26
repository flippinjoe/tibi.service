import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './AdminAuth'
import { AuthProvider } from './contexts/AuthContext'
import Home from "./screens/Home";
import Login from './screens/Login'


const AdminRouter = () => {


    return (
        <AuthProvider>
        <Router>
            <Switch>
              <Route path="/admin/login" component={Login} />
              <PrivateRoute path="/" component={Home} />
            </Switch>
        </Router>
      </AuthProvider>
    )
}

export default AdminRouter
