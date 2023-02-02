import { DestinationSlide } from "../DestinationSlide/DestinationSlide";
import { DestinationType } from "../../pages/Destination/Destination";
import { Swiper as SwiperClass } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import React from "react";
import styles from "./DestinationContentStyles.module.scss";
import typography from "../../styles/TypographyStyles.module.scss";

type DestinationContentProps = {
    data: DestinationType[];
};

export const DestinationContent = ({
    data = []
}: DestinationContentProps) => {
    const [index, setIndex] = React.useState<number>(0);
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
        <div className={styles["destination"]}>
            <h1 className={`${typography.heading05} ${styles["destination__heading"]}`}>
                <span className={styles['destination__heading--strong']}>
                    01
                </span>
                <span className={styles['destination__heading--normal']}>
                    PICK YOUR DESTINATION
                </span>
            </h1>

            <div className={styles['section-container']}>
                <section className={styles["section"]}>
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
                            {data.map((destination, jindex) => {
                                return (
                                    <SwiperSlide
                                        className={styles['swiper-slide']}
                                        key={jindex}
                                    >
                                        <DestinationSlide
                                            destination={destination}
                                            destinations={data}
                                            index={index}
                                            setIndex={setIndex}
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