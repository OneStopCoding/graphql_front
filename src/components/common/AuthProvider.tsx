import React, {FC, ReactNode, useEffect, useMemo, useState} from "react";
import {jwtDecode} from "jwt-decode"
import Loader from "./Loader";

interface Props {
    children: ReactNode
}

interface User{
    username: String;
    roles: String[];
}

interface AuthContextData{
    saveToken: (token: string) => void,
    clearToken: () => void,
    user: User | null,
}

const AuthContext = React.createContext<AuthContextData | null>(null)

const AuthProvider: FC<Props> = ({ children}) => {
    const [user, setUser] = useState<User | null>(null)
    const  [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const jwtToken = localStorage.getItem("token")
        if (jwtToken != null && user === null){
            const decodedToken =  jwtDecode<{sub: string; roles: string[]}>(jwtToken)
            setUser({
                username: decodedToken.sub,
                roles: decodedToken.roles,
            })
        }
        setIsLoading(false)
    },[]);

    const clearToken =() => {
        localStorage.clear()
        setUser(null)
    }

    const saveToken = (token: string) => {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode<{sub: string; roles: string[]}>(token);
        setUser({
            username: decodedToken.sub,
            roles: decodedToken.roles,
        })
    }

    const contextValue = useMemo(
        () => ({
            saveToken,
            clearToken,
            user,
        }), [user]
    );

    return <AuthContext.Provider value={contextValue}>
        <>
            {isLoading && <Loader open={isLoading} />}
            {!isLoading && <div>{children}</div>}
    </>
    </AuthContext.Provider>
}
export default AuthProvider

export const useAuth = () => React.useContext(AuthContext)


