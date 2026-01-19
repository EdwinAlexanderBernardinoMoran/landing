import { RouterProvider } from "react-router"
import { appRouter } from "./routes/app.route"

export const LandingApp = () => {
  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}