import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import TentangKami from "./views/TentangKami";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/tentang-kami",
        element: <TentangKami />
    },
]);

export default router;