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
                history.replace(from);
            })
            .catch(err => { console.error(err) })
        },
        [auth, username, password, from, history]
    )

    useEffect(() => {

        if (loading) {
            executeLogin()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    
    
    const login = () => {
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