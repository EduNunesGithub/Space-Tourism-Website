import {
    GlobalBackground,
    URL
} from "../../components/GlobalBackground/GlobalBackground";
import { TechnologyContent } from "../../components/TechnologyContent/TechnologyContent";
import { useQuery } from "react-query";
import backgroundTechnologyDesktop from "../../assets/JPG/backgrounds/background-technology-desktop.jpg";
import backgroundTechnologyMobile from "../../assets/JPG/backgrounds/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "../../assets/JPG/backgrounds/background-technology-tablet.jpg";
import React from "react";
import styles from "./TechnologyStyles.module.scss";

export type TechnologyType = {
    description: string;
    images: {
        portrait: string;
        landscape: string;
    };
    name: string;
};

const background: URL[] = [
    {
        minWidth: 0,
        src: backgroundTechnologyMobile
    },
    {
        minWidth: 571.5,
        src: backgroundTechnologyTablet
    },
    {
        minWidth: 1104,
        src: backgroundTechnologyDesktop
    }
];

export const Technology = () => {
    const { data = [] } = useQuery<TechnologyType[]>("technology-data", async () => {
        const response = await fetch("/JSON/technology.json");

        if (!response.ok) throw new Error("The response was not ok");

        return response.json();
    }, { initialData: [] });

    React.useEffect(() => {
        document.title = "Space Tourism | Technology";
    }, []);

    return (
        <div className={styles["technology"]}>
            <GlobalBackground URLs={background} />

            <TechnologyContent data={data} />
        </div>
    );
};