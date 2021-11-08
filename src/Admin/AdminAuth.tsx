// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

import React from 'react';
import { Navigate, Route } from 'react-router';
import { RouteProps } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export const PrivateRoute = ({ children, element: SomeC, ...rest }: RouteProps) => {
  return (
    <Route {...rest} element={<RequireAuth redirectTo="/admin/login">{children}</RequireAuth>} />
  );
  // let auth = useAuth();

  //   console.log(`Private route: has login - ${auth.user} | ${auth.initialized}`)
  // return (
  //   <Route
  //     {...rest}
  //     element={({ children, redirectTo }) =>
  //       auth.user ? (
  //           // @ts-ignore
  //         children || <SomeC />
  //       ) : (
  //           auth.initialized ? (
  //               <Redirect
  //                 to={{
  //                   pathname: "/admin/login",
  //                   state: { from: location }
  //                 }}
  //               />
  //             )
  //           : (
  //               <p>Initializing...</p>
  //           )
  //       )
  //     }
  //   />
  // );
};

function RequireAuth({ children, redirectTo }: { children: any; redirectTo: string }) {
  const auth = useAuth();

  if (!auth.initialized) {
    return <p>Initializing...</p>;
  }

  if (auth.user) {
    return children;
  }

  return <Navigate to={redirectTo} />;
}
