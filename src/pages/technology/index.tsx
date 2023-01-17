import Box from "@mui/material/Box";
import { GetStaticProps } from "next";

import {
    GlobalBackground,
    URLs
} from "@/components/GlobalBackground/GlobalBackground";
import { TechnologyContent } from "@/components/TechnologyContent/TechnologyContent";
import { TechnologyContent as TechnologyContentSass } from "@/components/TechnologyContent/TechnologyContentSass";
import { TechnologySlide } from "@/components/TechnologySlide/TechnologySlideSass";

import backgroundTechnologyDesktop from "../../../public/JPG/backgrounds/background-technology-desktop.jpg";
import backgroundTechnologyMobile from "../../../public/JPG/backgrounds/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "../../../public/JPG/backgrounds/background-technology-tablet.jpg";

type Data = {
    response: Technology[]
};

export type Technology = {
    description: string;
    images: {
        portrait: string;
        landscape: string;
    },
    name: string;
};

type TechnologyProps = {
    data: Technology[];
};

const background: URLs = [];

const Technology = ({
    data = []
}: TechnologyProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%"
            }}
        >
            <GlobalBackground
                URLs={background}
            />

            {/* <TechnologyContent
                data={data}
            /> */}

            <TechnologyContentSass
                data={data}
            />
        </Box>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const data: Data = {
        response: []
    };

    try {
        const response = await fetch(`${process.env.BASE_URL}/api/technology`);

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

export default Technology;