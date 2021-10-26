import { useAuth } from "../contexts/AuthContext"

import LogoutButton from '../components/LogoutButton'

const HomeScreen = () => {
    const auth = useAuth()


    return (
        <div id='home'>
            <p>Welcome to the admin {auth.user && auth.user.username}</p>
            <LogoutButton />
        </div>
    )
}


export default HomeScreen