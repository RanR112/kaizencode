import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import TentangKami from "./views/TentangKami";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/tentang-kami",
        element: <TentangKami />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);

export default router;