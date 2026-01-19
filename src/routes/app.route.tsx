import { About } from "@/landing/about/About";
import { Contact } from "@/landing/contact/Contact";
import { Global } from "@/landing/global/Global";
import { LandingLayout } from "@/landing/layouts/LandingLayout";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            {
                index: true,
                element: <Global/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
])