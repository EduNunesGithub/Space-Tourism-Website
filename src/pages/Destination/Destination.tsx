import { DestinationContent } from "../../components/DestinationContent/DestinationContent";
import {
    GlobalBackground,
    URL
} from "../../components/GlobalBackground/GlobalBackground";
import { useQuery } from "react-query";
import React from "react";
import styles from "./DestinationStyles.module.scss";

import backgroundDestinationDesktop from "../../assets/JPG/backgrounds/background-destination-desktop.jpg";
import backgroundDestinationMobile from "../../assets/JPG/backgrounds/background-destination-mobile.jpg";
import backgroundDestinationTablet from "../../assets/JPG/backgrounds/background-destination-tablet.jpg";

export type DestinationType = {
    description: string;
    distance: string;
    images: {
        png: string;
        webp: string;
    };
    name: string;
    travel: string;
};

const background: URL[] = [
    {
        minWidth: 0,
        src: backgroundDestinationMobile
    },
    {
        minWidth: 571.5,
        src: backgroundDestinationTablet
    },
    {
        minWidth: 1104,
        src: backgroundDestinationDesktop
    }
];

export const Destination = () => {
    const { data = [] } = useQuery<DestinationType[]>(
        "destination-data",
        async () => {
            const response = await fetch("/JSON/destinations.json");

            if (!response.ok) throw new Error("The response was not ok");

            return response.json();
        },
        { initialData: [] }
    );

    React.useEffect(() => {
        document.title = "Space Tourism | Destination";
    }, []);

    return (
        <div className={styles["destination"]}>
            <GlobalBackground URLs={background} />

            <DestinationContent data={data} />
        </div>
    );
};