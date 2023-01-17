import { GetStaticProps } from "next";

import { DestinationsContent } from "@/components/DestinationsContent/DestinationsContent";

import styles from "./IndexStyles.module.scss";

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

const Destinations = ({
    data
}: DestinationsProps) => {
    console.log(data)

    return (
        <div className={styles['index-styles']}>
            <DestinationsContent data={data}/>
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