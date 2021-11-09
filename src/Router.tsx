import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import AdminPortal from './Admin/AdminPortal';
import AdminPortal2 from './Admin/NewAdminEntry';
import PublicHome from './PublicApp/App';

// const Layout = () => <Outlet />;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Routes>
        <Route path="admin/*" element={<AdminPortal2 />} />
        {/* <Route path="/admin" element={<AdminPortal />} /> */}
        <Route path="/" element={<PublicHome />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
