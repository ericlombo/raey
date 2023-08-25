'use client'
import { createContext, useEffect, useState } from "react"
import { supabase } from "../utils/supabaseConfig"

export const AuthContext = createContext()

export const AuthProvider = ({ children })=>{
    const [ session, setSession ] = useState(null)

    const handleLogout = ()=>{
        supabase.auth.signOut()
    }
    useEffect(()=>{
        supabase.auth.getSession().then((
            {data: {session}})=>{
                setSession(session)
            })
        
        supabase.auth.onAuthStateChange((_event, session)=>{
            setSession(session)
        })
    }, [])
    return (
        <AuthContext.Provider value={{session, handleLogout}}>
            { children }
        </AuthContext.Provider>
    )
}