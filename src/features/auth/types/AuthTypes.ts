interface UserModule {
    module: string,
    routes: string[]
}

interface User {
    name: string,
    email: string,
    modules: UserModule[]
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
}

export type AuthAction =
    | { type: 'LOGIN', payload: { user: User, accessToken: string; refreshToken: string } }
    | { type: 'LOGOUT' }
    | { type: 'SET_LOADING', payload: boolean };