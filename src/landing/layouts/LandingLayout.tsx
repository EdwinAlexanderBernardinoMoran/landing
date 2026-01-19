import Footer from "@/shared/components/Footer"
import Header from "@/shared/components/Header"
import { Outlet } from "react-router"

export const LandingLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}