import { CrewSlide } from "../CrewSlide/CrewSlide";
import { CrewType } from "../../pages/Crew/Crew";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import React from "react";
import styles from "./CrewContentStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type CrewContentProps = {
    data: CrewType[];
};

export const CrewContent = ({
    data = []
}: CrewContentProps) => {
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
        <div className={styles['crew-content']}>
            <h1 className={`${typography["heading05"]} ${styles['crew-content__heading']}`}>
                <span className={styles['crew-content__heading--strong']}>
                    02
                </span>
                <span className={styles['crew-content__heading--normal']}>
                    MEET YOUR CREW
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
                                    centerInsufficientSlides: true,
                                    spaceBetween: 16
                                },
                                1104: {
                                    centerInsufficientSlides: false,
                                    spaceBetween: 24
                                }
                            }}
                            className={styles['control-swiper']}
                            onAfterInit={() => setShowControl(true)}
                            slidesPerView="auto"
                        >
                            {data.map((crew, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['control-swiper-slide']}
                                        key={jindex}
                                    >
                                        <button
                                            aria-label={`Go to slide ${jindex + 1}`}
                                            className={styles['control-container__button']}
                                            onClick={() => setIndex(jindex)}
                                        />
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
                        >
                            {data.map((crew, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['swiper-slide']}
                                        key={jindex}
                                    >
                                        <CrewSlide
                                            crew={crew}
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