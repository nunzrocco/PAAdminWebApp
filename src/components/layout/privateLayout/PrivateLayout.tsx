import { Navigate, Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { useAuthStore } from '@/features/auth/stores/AuthStore';

export const PrivateLayout = () => {
    console.log('private layout rendered')
    const isAuth = useAuthStore((s) => s.isAuthenticated)
    
    if (!isAuth) {
    return <Navigate to="/login" />
  }
  
    return (
        <>
            <Header />
            <main className='bg-gray-100 h-screen flex'>
                <Sidebar />
                <div className='h-full w-full m-5'>
                    <Outlet />
                </div>

            </main>
        </>
    );
};