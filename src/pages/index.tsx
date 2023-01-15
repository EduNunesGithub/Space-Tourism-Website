import {
    GlobalBackground,
    URLs
} from "@/components/GlobalBackground/GlobalBackground";

import { theme } from "@/styles/Theme/default";

import backgroundHomeDesktop from "../../public/JPG/backgrounds/background-home-desktop.jpg";
import backgroundHomeMobile from "../../public/JPG/backgrounds/background-home-mobile.jpg";
import backgroundHomeTablet from "../../public/JPG/backgrounds/background-home-tablet.jpg";

const background: URLs = [
    {
        minWidth: theme.breakpoints.values.xs,
        URL: backgroundHomeMobile
    },
    {
        minWidth: theme.breakpoints.values.md,
        URL: backgroundHomeTablet
    },
    {
        minWidth: theme.breakpoints.values.lg,
        URL: backgroundHomeDesktop
    }
];

const Home = () => {
    return (
        <>
            <GlobalBackground
                URLs={background}
            />
        </>
    );
};

export default Home;