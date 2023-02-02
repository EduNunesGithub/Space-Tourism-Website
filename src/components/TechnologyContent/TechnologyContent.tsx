import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import { TechnologySlide } from "../TechnologySlide/TechnologySlide";
import { TechnologyType } from "../../pages/Technology/Technology";
import React from "react";
import styles from "./TechnologyContentStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type TechnologyContentProps = {
    data: TechnologyType[];
};

export const TechnologyContent = ({
    data = []
}: TechnologyContentProps) => {
    const [index, setIndex] = React.useState<number>(0);
    const [showControl, setShowControl] = React.useState<boolean>(false);
    const [showSwiper, setShowSwiper] = React.useState<boolean>(false);
    const [swiper, setSwiper] = React.useState<SwiperClass>({} as SwiperClass);

    React.useEffect(() => {
        if (
            Object.keys(swiper).length === 0 ||
            swiper.destroyed
        ) return;

        swiper.slideTo(index);
    }, [index, swiper]);

    return (
        <div className={styles['technology-content']}>
            <h1 className={`${typography["heading05"]} ${styles['technology-content__heading']}`}>
                <span className={styles['technology-content__heading--strong']}>
                    03
                </span>
                <span className={styles['technology-content__heading--normal']}>
                    SPACE LAUNCH 101
                </span>
            </h1>

            <div className={styles['section-container']}>
                <section className={styles["section"]}>
                    <div
                        className={
                            styles['control-container'] + " " +
                            (showControl === true && styles['control-container--show'])
                        }
                    >
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
                            className={styles['control-swiper']}
                            onAfterInit={() => setShowControl(true)}
                            slidesPerView="auto"
                        >
                            {data.map((technology, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['control-swiper-slide']}
                                        key={jindex}
                                    >
                                        <button
                                            aria-label={`Go to slide ${jindex + 1}`}
                                            className={
                                                styles['control-container__button'] + " " +
                                                (index === jindex && styles['control-container__button--active'])
                                            }
                                            onClick={() => setIndex(jindex)}
                                        >
                                            {jindex + 1}
                                        </button>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>

                    <div
                        className={
                            styles['swiper-container'] + " " +
                            (showSwiper === true && styles['swiper-container--show'])
                        }
                    >
                        <Swiper
                            allowTouchMove={false}
                            className={styles["swiper"]}
                            onAfterInit={() => setShowSwiper(true)}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            slidesPerView={1}
                            spaceBetween={16}
                        >
                            {data.map((technology, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['swiper-slide']}
                                        key={jindex}
                                    >
                                        <TechnologySlide technology={technology} />
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