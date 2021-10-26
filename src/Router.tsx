import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import AdminPortal from './Admin/AdminPortal'
import PublicHome from './PublicApp/App'


  export default function App() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <AdminPortal />
            </Route>
            <Route path="/">
              <PublicHome />
            </Route>
          </Switch>
      </Router>
    );
  }