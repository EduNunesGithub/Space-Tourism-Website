import {
    GlobalBackground,
    URL
} from "../../components/GlobalBackground/GlobalBackground";
import { HomeContent } from "../../components/HomeContent/HomeContent";
import React from "react";
import styles from "./HomeStyles.module.scss";

import backgroundHomeDesktop from "../../assets/JPG/backgrounds/background-home-desktop.jpg";
import backgroundHomeMobile from "../../assets/JPG/backgrounds/background-home-mobile.jpg";
import backgroundHomeTablet from "../../assets/JPG/backgrounds/background-home-tablet.jpg";

const background: URL[] = [
    {
        minWidth: 0,
        src: backgroundHomeMobile
    },
    {
        minWidth: 571.5,
        src: backgroundHomeTablet
    },
    {
        minWidth: 1104,
        src: backgroundHomeDesktop
    }
];

export const Home = () => {
    React.useEffect(() => {
        document.title = "Space Tourism | Home";
    }, []);

    return (
        <div className={styles["home"]}>
            <GlobalBackground URLs={background} />

            <HomeContent />
        </div>
    );
};