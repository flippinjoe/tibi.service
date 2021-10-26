import React, { useEffect, useState } from 'react'
import { createContext, useContext } from "react";



const authService = {
    signIn: async (username: string, password: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ username, created: new Date(), id: Math.random()* 100000})
            }, 3000);
        })
    },
    signOut: async () => {
        return null
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
        try {
            console.group('login')
            console.log('Attempting to restore login');
            
            const data = localStorage.getItem('_u')
            if (data && data.length > 0) {
                const obj = JSON.parse(data)
                if (obj) {
                    console.log(`Restored `, obj)
                    setUser(obj)
                }
            }
            console.groupEnd()
        } catch (err) {
            console.error(err)
        }
        setInitialized(true)
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
  