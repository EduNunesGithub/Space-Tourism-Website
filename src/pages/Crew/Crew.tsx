import { CrewContent } from "../../components/CrewContent/CrewContent";
import {
    GlobalBackground,
    URL
} from "../../components/GlobalBackground/GlobalBackground";
import { useQuery } from "react-query";
import backgroundCrewDesktop from "../../assets/JPG/backgrounds/background-crew-desktop.jpg";
import backgroundCrewMobile from "../../assets/JPG/backgrounds/background-crew-mobile.jpg";
import backgroundCrewTablet from "../../assets/JPG/backgrounds/background-crew-tablet.jpg";
import React from "react";
import styles from "./CrewStyles.module.scss";

export type CrewType = {
    bio: string;
    images: {
        png: string;
        webp: string;
    };
    name: string;
    role: string;
};

const background: URL[] = [
    {
        minWidth: 0,
        src: backgroundCrewMobile
    },
    {
        minWidth: 571.5,
        src: backgroundCrewTablet
    },
    {
        minWidth: 1104,
        src: backgroundCrewDesktop
    }
];

export const Crew = () => {
    const { data = [] } = useQuery<CrewType[]>("crew-data", async () => {
        const response = await fetch("/JSON/crew.json");

        if (!response.ok) throw new Error("The response was not ok");

        return response.json();
    }, { initialData: [] });
    
    React.useEffect(() => {
        document.title = "Space Tourism | Crew";
    }, []);

    return (
        <div className={styles["crew"]}>
            <GlobalBackground URLs={background} />

            <CrewContent data={data} />
        </div>
    );
};