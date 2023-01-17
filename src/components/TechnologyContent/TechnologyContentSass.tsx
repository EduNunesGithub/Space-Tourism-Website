import {
    useEffect,
    useState
} from "react";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { TechnologySlideButton } from "../TechnologySlide/TechnologySlideButton";
import { TechnologySlide } from "../TechnologySlide/TechnologySlideSass";

import { Technology } from "@/pages/technology";

import styles from "./TechnologyContentStyles.module.scss";

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
        <div className={styles['technology-content']}>
            <h1 className={styles['technology-content__heading']}>
                <span className={styles['technology-content__heading--strong']}>
                    03
                </span>
                <span className={styles['technology-content__heading--normal']}>
                    SPACE LAUNCH 101
                </span>
            </h1>

            <div className={styles['section-container']}>
                <section className={styles["section"]}>
                    <div className={styles['control-container']}>
                        <div className={styles['control-container__decoration']} />

                        <div className={styles['control-container__swiper']}>
                            <Swiper
                                breakpoints={{
                                    0: {
                                        direction: "horizontal",
                                        spaceBetween: 16
                                    },
                                    1104: {
                                        direction: "vertical",
                                        spaceBetween: 32
                                    }
                                }}
                                centerInsufficientSlides={true}
                                className={styles['control-container-swiper']}
                                grabCursor={true}
                                onSwiper={(swiper) => setSwiperControl(swiper)}
                                preventClicks={true}
                                slidesPerView="auto"
                            >
                                {data.map((technology, jindex) => {
                                    return (
                                        <SwiperSlide
                                            className={styles['control-container-swiper-slide']}
                                            key={jindex}
                                        >
                                            <TechnologySlideButton
                                                active={index === jindex}
                                                ButtonBaseProps={{
                                                    onClick: () => setIndex(jindex)
                                                }}
                                                name={`${jindex + 1}`}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>

                    <div className={styles['swiper-container']}>
                        <Swiper
                            allowTouchMove={false}
                            className={styles['swiper-container-swiper']}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            preventClicks={true}
                            slidesPerView={1}
                            spaceBetween={32}
                        >
                            {data.map((technology, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['swiper-container-swiper-slide']}
                                        key={jindex}
                                    >
                                        <TechnologySlide
                                            technology={technology}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};