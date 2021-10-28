import Auth from '@aws-amplify/auth';
import React, { useEffect, useState } from 'react'
import { createContext, useContext } from "react";



const authService = {
    signIn: async (username: string, password: string) => {

        return Auth.signIn(username, password)
        
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({ username, created: new Date(), id: Math.random()* 100000})
        //     }, 3000);
        // })
    },
    signOut: async () => {
        return Auth.signOut()
    }
}



type AuthContextProps = {
    signIn: (username: string, password: string) => Promise<any>,
    signOut: () => Promise<any>,
    user: any|null,
    initialized: boolean
}


const AuthContext = createContext<AuthContextProps>({
    ...authService,
    user: null,
    initialized: false
})

export const useAuth = () => useContext(AuthContext)


interface AuthProviderProps { }

export const AuthProvider = ({ children }: React.PropsWithChildren<AuthProviderProps>) => {
    const auth = useProvideAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}


export const useProvideAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [initialized, setInitialized] = useState(false)


    useEffect(() => {
        (async () => {
            try {
                console.group('login')
                console.log('Attempting to restore login');
                const res = await Auth.currentUserInfo()
                console.log(res)
                setUser(res)
            } catch (err) {
                console.error(err)
            }
            setInitialized(true)
        })()
    }, [])

    useEffect(() => {

        try {
            console.log(`Saving user`, user)
            localStorage.setItem('_u', user == null ? '' : JSON.stringify(user))
        }
        catch (err) {
            console.error(err)
        }
    }, [user])
  
    const signIn = async (username: string, password: string): Promise<any> => {
        return authService.signIn(username, password)
        .then(u => setUser(u))
    };
  
    const signOut: () => Promise<any> = async () => {
        return authService.signOut()
        .then(() => setUser(null))
    };
  
    return {
      user,
      initialized,
      signIn,
      signOut
    };
  }
  