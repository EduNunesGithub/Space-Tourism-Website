import { createBrowserRouter } from "react-router-dom";
import { Crew } from "../pages/Crew/Crew";
import { Destination } from "../pages/Destination/Destination";
import { Home } from "../pages/Home/Home";
import { Technology } from "../pages/Technology/Technology";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/destination",
        element: <Destination />
    },
    {
        path: "/crew",
        element: <Crew />
    },
    {
        path: "/technology",
        element: <Technology />
    }
]);