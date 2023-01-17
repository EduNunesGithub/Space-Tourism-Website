import { GetStaticProps } from "next";

import { DestinationsContent } from "@/components/DestinationsContent/DestinationsContent";
import {
    GlobalBackground,
    URLs
} from "@/components/GlobalBackground/GlobalBackground";

import styles from "./IndexStyles.module.scss";

import backgroundDestinationDesktop from "../../../public/JPG/backgrounds/background-destination-desktop.jpg";
import backgroundDestinationMobile from "../../../public/JPG/backgrounds/background-destination-mobile.jpg";
import backgroundDestinationTablet from "../../../public/JPG/backgrounds/background-destination-tablet.jpg";

type Data = {
    response: Destination[];
};

export type Destination = {
    description: string;
    distance: string
    images: {
        png: string;
        webp: string;
    },
    name: string;
    travel: string;
};

type DestinationsProps = {
    data: Destination[];
};

const background: URLs = [
    {
        minWidth: 0,
        URL: backgroundDestinationMobile
    },
    {
        minWidth: 571.5,
        URL: backgroundDestinationTablet
    },
    {
        minWidth: 1104,
        URL: backgroundDestinationDesktop
    }
];

const Destinations = ({
    data
}: DestinationsProps) => {
    return (
        <div className={styles['index-styles']}>
            <GlobalBackground
                colorPlaceholder="#0B0D17"
                URLs={background}
            />

            <DestinationsContent data={data} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const data: Data = {
        response: []
    };

    try {
        const response = await fetch(`${process.env.BASE_URL}/api/destinations`);

        if (response.status === 200) data.response = await response.json();
    } catch {
        data.response = []
    };

    return ({
        props: {
            data: data.response
        },
        revalidate: 60 * 60 * 24
    });
};

export default Destinations;