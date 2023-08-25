'use client'
import { useState} from "react"
import { supabase} from "../../utils/supabaseConfig"

const Login = ()=>{

    const [ email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e)=>{
        setEmail(e.target.value)
    }

    const handleLogin =  async (e)=>{
        e.preventDefault()
        setLoading(true)
        const{ error } = await supabase.auth.signInWithOtp({email})
        if (error){
            alert(error.error_description || error.message)
        } else {
            alert('Check your email')
        }
        setLoading(false)
    }
    return (
        <form onSubmit={handleLogin}>
            <input type="text" onChange={handleChange}  />
            {
                loading ? <h2>Loading</h2> : <button type="submit">Login</button>
            }
        </form>
    )
}

export default Login