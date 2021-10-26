

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

import { 
    Route,
    Redirect,
    RouteProps
} from 'react-router-dom'
import { useAuth } from "./contexts/AuthContext";


type PrivateRouteProps = any

export const PrivateRoute = ({ children, component: SomeC, ...rest }: RouteProps<PrivateRouteProps>) => {
  let auth = useAuth();

    console.log(`Private route: has login - ${auth.user} | ${auth.initialized}`)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
            // @ts-ignore
          children || <SomeC />
        ) : (
            auth.initialized ? (
                <Redirect
                  to={{
                    pathname: "/admin/login",
                    state: { from: location }
                  }}
                />
              )
            : (
                <p>Loading...</p>
            )
        )
      }
    />
  );
}
