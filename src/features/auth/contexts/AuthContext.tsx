import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import { authReducer, initialState } from "../reducers/AuthReducer";

interface AuthContextProps {
    state: typeof initialState,
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         dispatch({ type: 'LOGIN', payload: { name: '', email: '', modules: [] } });
    //     } else {
    //         dispatch({ type: 'FINISH_LOADING' });
    //     }
    // }, []);

    const login = async (email: string, password: string) => {
        const response = await fetch("api/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();

        localStorage.setItem('accessToken', data.token);
        dispatch({ type: 'LOGIN', payload: { name: '', email: '', modules: [] } });
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {/* Solo renderizamos los hijos cuando la carga inicial termina */}
            {!state.loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
    return context;
};