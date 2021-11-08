import { useAuth } from '../contexts/AuthContext';

const LogoutButton = () => {
  const auth = useAuth();

  const logout = () => {
    auth.signOut();
  };
  return (
    <button className="logout-button" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
