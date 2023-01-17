import {
    GlobalBackground,
    URLs
} from "@/components/GlobalBackground/GlobalBackground";

import backgroundHomeDesktop from "../../public/JPG/backgrounds/background-home-desktop.jpg";
import backgroundHomeMobile from "../../public/JPG/backgrounds/background-home-mobile.jpg";
import backgroundHomeTablet from "../../public/JPG/backgrounds/background-home-tablet.jpg";

const background: URLs = [
    {
        minWidth: 0,
        URL: backgroundHomeMobile
    },
    {
        minWidth: 571.5,
        URL: backgroundHomeTablet
    },
    {
        minWidth: 1104,
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