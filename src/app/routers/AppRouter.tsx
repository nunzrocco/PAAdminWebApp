import { createBrowserRouter, Navigate } from "react-router-dom";
import { PrivateLayout } from "../../components/layout/privateLayout/PrivateLayout";
import { Dashboard } from "../../features/dashboard/Dashboard";
import { Partners } from "../../features/partners/Partners";
import { Players } from "../../features/players/Players";
import { PublicLayout } from "@/components/layout/publicLayout/PublicLayout";
import { LoginPage } from "../pages/login/Login";

export const AppRouter = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
        {
            path: "/login",
            element: <LoginPage />,
        },
        ],
    },

    {
        path: "/",
        element: <PrivateLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "partners",
                element: <Partners />
            },
            {
                path: "players",
                element: <Players />
            }
        ]
    },

    // fallback
    {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
    },
])