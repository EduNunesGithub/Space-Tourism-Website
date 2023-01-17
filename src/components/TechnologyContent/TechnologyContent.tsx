import Box from "@mui/material/Box";
import {
    useEffect,
    useState
} from "react";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { Heading05 } from "../Typography/Typography";
import { Technology } from "../../pages/technology";
import { TechnologySlide } from "@/components/TechnologySlide/TechnologySlide";
import { TechnologySlideButton } from "@/components/TechnologySlide/TechnologySlideButton";

import { pxToRem } from "@/utils/unitConverter";

type TechnologyContentProps = {
    data: Technology[];
};

export const TechnologyContent = ({
    data = []
}: TechnologyContentProps) => {
    const [index, setIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperClass>({} as SwiperClass);
    const [swiperControl, setSwiperControl] = useState<SwiperClass>({} as SwiperClass);

    useEffect(() => {
        if (
            Object.keys(swiper).length === 0 ||
            Object.keys(swiperControl).length === 0 ||
            swiper.destroyed ||
            swiperControl.destroyed
        ) return;

        swiper.slideTo(index);
    }, [index, swiper, swiperControl]);

    return (
        null
    );
};