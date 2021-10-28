import API, { graphqlOperation } from '@aws-amplify/api';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { listTibis } from '../graphql/queries';
import { PrivateRoute } from './AdminAuth'
import { AuthProvider } from './contexts/AuthContext'
import Home from "./screens/Home";
import Login from './screens/Login'


const AdminRouter = () => {

  useEffect(() => {
    
    (async () => {
      try {
        const result = await API.graphql(graphqlOperation(listTibis))
        console.log(result)
      }
      catch (ex) {
        console.log(`Didn't work `, ex)
      }
    })()
  }, [])


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
