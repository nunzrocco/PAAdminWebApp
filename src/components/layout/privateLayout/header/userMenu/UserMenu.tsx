import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Separator } from '@radix-ui/react-separator';

interface UserMenuProps {
    userImageUrl?: string;
    userName?: string;
}
const UserMenu = (props: UserMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { user } = useAuth();
    // Cerrar el menú si se hace click fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            {/* Botón de la Imagen */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 rounded-full cursor-pointer"
            >
                <img
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                />
            </button>

            {/* Menú Desplegable */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg z-50 focus:outline-none">
                    <div className="py-1">
                        <div className='px-4 py-2 text-xs text-emerald-800'>
                            {user?.email}
                        </div>
                        <div>
                            <Separator className='bg-stone-900'/>
                        </div>
                        <a
                            href="#perfil"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Tu Perfil
                        </a>
                        <a
                            href="#ajustes"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Ajustes del Sistema
                        </a>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button
                            onClick={() => console.log('Cerrando sesión...')}
                            className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;