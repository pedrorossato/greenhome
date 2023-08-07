import { ReactNode, useState, useEffect } from "react"
import AuthContext from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom";

export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();
    
    useEffect(()=>{
        validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const validateToken = async () => {
        const token = Cookies.get('@Token');
        if(!token)
            return;
        const data = await api.validateToken(token);
        if (!data.isValid) {
            window.location.href = '/login';
            return;
        }
        setUser(data.user)
    }

    const authenticate = async (email: string, password: string) => {
        const {user, token} = await api.authenticate(email, password);
        if(user && token) {
            setUser(user);
            Cookies.set('@Token', token);
            return true;
        }
        return false;
    }
    
    const unauthenticate = async () => {
        await api.unauthenticate();
        setUser(null);
        Cookies.remove('@Token');
    }

    return (
        <AuthContext.Provider value={{user, authenticate, unauthenticate}}>
            {children}
        </AuthContext.Provider>
    )
}