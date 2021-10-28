import Auth from '@aws-amplify/auth'
import { useState, useEffect,useCallback } from 'react'

import { useLocation, useHistory } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = useAuth()
    let history = useHistory();
    let location = useLocation<any>();
    let { from } = location.state || { from: { pathname: "/" } };

    const executeLogin = useCallback(
        () => {
            auth.signIn(username, password)
            .then(value => {

                // TODO: See if we have a `TibiUser` setup.  If not then we need to push to the
                // more details screen


                history.replace(from);
            })
            .catch(err => { console.error(err) })
        },
        [auth, username, password, from, history]
    )

    useEffect(() => {
        /// If we're already authed, then ignore this
        if (auth.initialized && auth.user && !loading) {
            history.replace(from)
        }
    }, [auth.initialized, auth.user, from, history, loading])

    useEffect(() => {

        if (loading) {
            executeLogin()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    
    
    const login = async () => {
        setLoading(true)
    }

    return (
        <div id='auth-form'>
            <p>Need auth</p>
            <form name='login' onSubmit={(e) => {
                e.preventDefault()
                login()
                return false
            }}>
                <input id='username' 
                    readOnly={loading}
                    placeholder='Username' value={username} onChange={e => setUsername(e.target.value) } />
                <input readOnly={loading} id='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value) } />
                <button onClick={login}>Sign In</button>
            </form>
        </div>
    )
}


export default LoginPage