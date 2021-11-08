import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminPortal from './Admin/AdminPortal';
import AdminPortal2 from './Admin/NewAdminEntry';
import PublicHome from './PublicApp/App';

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/admin2/*" element={<AdminPortal2 />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/" element={<PublicHome />} />
      </Routes>
    </Router>
  );
}
