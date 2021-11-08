import { useAuth } from '../contexts/AuthContext';

import LogoutButton from '../components/LogoutButton';
import useTibiProfile from '../../hooks/useTibiProfile';

const HomeScreen = () => {
  const auth = useAuth();
  const tibi = useTibiProfile();

  return (
    <div id="home">
      <p>Welcome to the admin {auth.user && auth.user.username}</p>
      <p>Tibi: {tibi?.firstName}</p>
      <LogoutButton />
    </div>
  );
};

export default HomeScreen;
